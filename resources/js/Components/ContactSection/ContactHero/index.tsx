import {Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import cosgroveApiServices from "../../../Services/cosgroveApiServices";
import {useState} from "react";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {toast} from "react-toastify";

export default function () {

    const [formVal, setFormVal] = useState<Form>({
        name: '',
        email: '',
        phone: '',
        message: '',
        token: ''
    });
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [errors, setErrors] = useState<Partial<Err>>({});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const {name, value} = event.target;
        setFormVal((prevValues: Form) => ({
            ...prevValues,
            [name as keyof Form]: value as string,
        }));
    };
    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!executeRecaptcha) {
            console.error('reCAPTCHA is not available.');
            return;
        }
        // CosgroveContactUs
        const validateErr: Partial<Err> = {};

        if (!formVal.name) {
            validateErr.name = 'Name is required';
        }
        if (!formVal.email) {
            validateErr.email = 'email is required';
        }
        if (!validateEmail(formVal.email)) {
            validateErr.email = 'Enter a valid email';
        }

        setErrors(validateErr);
        if (Object.keys(validateErr).length > 0) {

            console.log('invalid request');
            toast.info("Please fill all required fields", {
                position: "top-right"
            });
            return;
        }

        try {
            const token = await executeRecaptcha('CosgroveContactUs');
            let formData: any = formVal;
            formData['token'] = token;

            let response = await (new cosgroveApiServices()).sendContactDetails(formData);
            console.log(response);
            if (response.status == true) {
                setFormVal({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });


                toast.success("Message Sent Successfully!", {
                    position: "bottom-left"
                });
            } else {


                toast.error("Message Failed to send!", {
                    position: "bottom-left"
                });
            }
        }catch (error) {
            console.error('Error during reCAPTCHA verification:', error);
        }
    };


    return (
        <section className={styles.topSection}>
            <Container fluid>
                <Row>
                    <Col sm={12} className={styles.infoHomeInfo}>
                        <h5>Booking a Tour</h5>
                        <h2 className={`headerDark ${styles.m65}`}>
                            See it with your eyes.
                        </h2>
                    </Col>

                    <Col md={12} lg={7} className={styles.infoHomeInfo}>
                        <p className={`textPrimary`}>
                            Visit a Cosgrove home and experience opulence merged
                            with modern technology first-hand. Fill in the
                             form below and one of our team members will
                            be in touch.
                        </p>

                        <form className={styles.contactInTouch}>

                          <div>
                              {
                                  Object.keys(errors).length > 0 &&
                                  <div className={`text-center mb-3`}>
                                      {
                                          Object.keys(errors).map((item)=> {
                                              return (<div>{errors[item]}</div>)
                                          })
                                      }
                                  </div>}
                          </div>



                            <select value={formVal.project} defaultValue={''} onChange={handleChange} name={'project'}>
                                <option disabled >
                                    Select a Project
                                </option>
                                <option value="Cosgrove Smart Estate, Wuye">Cosgrove Smart Estate, Wuye</option>
                                <option value="Cosgrove Smart Estate, Mabushi">Cosgrove Smart Estate, Mabushi</option>
                                <option value="Cosgrove Smart Estate, Guzape">Cosgrove Smart Estate, Guzape</option>
                                <option value="The Nouveau by Cosgrove, Maitama">The Nouveau by Cosgrove, Maitama</option>
                                <option value="Tetra by Cosgrove, Wuye">Tetra by Cosgrove, Wuye</option>
                                <option value="Cosgrove Smart City, Katampe">Cosgrove Smart City, Katampe</option>
                                <option value="Châteaux by Cosgrove, Wuse 2">Châteaux by Cosgrove, Wuse 2</option>
                                <option value="Fourteen by Cosgrove, Wuye">Fourteen by Cosgrove, Wuye</option>
                                <option value="Cosgrove Smart Estate, Wuse 2">Cosgrove Smart Estate, Wuse 2</option>
                            </select>
                            <input
                                placeholder={"salutation"}
                                hidden={true}
                                className={styles.formItem}
                                value={formVal.salutation} onChange={handleChange} name={'salutation'} onError={() => Boolean(errors.name)}
                            />
                            <input
                                placeholder={"Name"}
                                className={styles.formItem}
                                value={formVal.name} onChange={handleChange} name={'name'} onError={() => Boolean(errors.name)}
                            />
                            <input
                                placeholder={"Email"}
                                className={styles.formItem}
                                value={formVal.email} onChange={handleChange} name={'email'} onError={() => Boolean(errors.email)}
                            />
                            <input
                                placeholder={"Phone"}
                                className={styles.formItem}
                                value={formVal.phone} onChange={handleChange} name={'phone'}
                            />
                            <textarea
                                placeholder={"Do you have a special request?"}
                                className={styles.formItem}
                                value={formVal.message} onChange={handleChange} name={'message'}
                            />



                            <button onClick={(e) => handleSubmit(e)}>Submit</button>
                        </form>
                    </Col>
                    <Col md={12} lg={5} className={styles.infoHomeCol}>
                        <div className={styles.infoHomeBG}/>
                    </Col>
                </Row>
            </Container>
        </section>
        // <div/>
    );
}
