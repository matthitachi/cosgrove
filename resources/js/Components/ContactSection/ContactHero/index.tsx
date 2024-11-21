import {Alert, Col, Container, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import { ReactComponent as Select } from "/public/assets/svg/select.svg";
import cosgroveApiServices from "../../../Services/cosgroveApiServices";
import {useState} from "react";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function () {

    const [formVal, setFormVal] = useState<Form>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [token, setToken] = useState();
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [variant, setVariant] = useState<Object>({
        type: 'successful',
        message:'Message sent Successfully'
    });
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
        if (!token) {
            validateErr.recaptcha = 'Complete Recaptcha';
        }

        setErrors(validateErr);
        if (Object.keys(validateErr).length > 0) {
            console.log('failed');
            return;
        }

        let response = await (new cosgroveApiServices()).sendContactDetails(formVal);
        console.log(response);
        if(response.status == true){
            setFormVal({
                name: '',
                email: '',
                phone: '',
                message: ''
            });

            setVariant({
                type: "success",
                message: 'Message Sent Successfully'
            });
        }else{

            setVariant({
                type: "danger",
                message: 'Message Failed'
            });
        }
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
        }, 2000);
    };

    function handleVerify(token: any) {
        console.log(token);
    }

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
                            {
                                Object.keys(errors).length > 0 &&
                                <div className={`text-center mb-3`}>
                                    {
                                        Object.keys(errors).map((item)=> {
                                            return (<div>{errors[item]}</div>)
                                        })
                                    }
                                </div>}

                            {
                                showAlert &&
                                <Alert key={variant.type} variant={variant.type}>
                                    {variant.message}
                                </Alert>
                            }
                            <select value={formVal.project} onChange={handleChange} name={'project'}>
                                <option disabled selected hidden>
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
                            {/*<div>*/}
                            {/*    <Select />*/}
                            {/*</div>*/}
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

                            <GoogleReCaptchaProvider reCaptchaKey="6LeGCysqAAAAAJGk5UgnBFg6ofJno9niS4zdRb2v">
                                <GoogleReCaptcha onVerify={handleVerify} action={'CosgroveContactUs'}/>
                            </GoogleReCaptchaProvider>

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
