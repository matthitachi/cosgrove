<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageSection;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function () {
            $this->seedHome();
            $this->seedAbout();
            $this->seedContact();
            $this->seedAgent();
            $this->seedPrivacy();
            $this->seedTerms();
        });
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function section(int $pageId, string $type, string $label, array $data, int $sort): void
    {
        PageSection::updateOrCreate(
            ['page_id' => $pageId, 'type' => $type, 'label' => $label],
            ['data' => $data, 'sort_order' => $sort, 'is_active' => true]
        );
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function seedHome(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'home'],
            [
                'title'            => 'Home',
                'template'         => 'home',
                'status'           => 'published',
                'sort_order'       => 1,
                'is_system'        => true,
                'meta_title'       => null,
                'meta_description' => null,
            ]
        );

        $this->section($page->id, 'hero', 'Hero section', [
            'heading'    => 'Welcome to a New Era of Smart Living.',
            'subheading' => 'Step into a realm of unparalleled grandeur, where the future of luxury is elegantly crafted today',
            'cta_label'  => null,
            'cta_url'    => null,
            'video_url'  => null,
        ], 1);

        $this->section($page->id, 'projects', 'Projects section', [
            'heading'    => 'Smart Communities',
            'subheading' => "Our projects are not just buildings; they're the embodiment of forward-thinking design and cutting-edge technology, seamlessly integrated to create next-generation smart homes. Each home is a testament of our commitment to quality, our passion for innovation, and our dedication to crafting spaces that go beyond the ordinary.",
        ], 2);

        $this->section($page->id, 'stats', 'Stats section', [
            'heading'    => 'Tech-Embedded Buildings',
            'subheading' => "Each of our homes is a marvel of modern engineering and an investment in your future. From sleek apartments and townhouses to opulent penthouses and villas, our diverse range of residences caters to every style and need.",
        ], 3);

        $this->section($page->id, 'features', 'Smart features section', [
            'heading'    => 'Estate Features',
            'subheading' => null,
        ], 4);

        $this->section($page->id, 'press', 'Press section', [
            'heading'    => 'Featured',
            'subheading' => null,
        ], 5);

        $this->section($page->id, 'cta', 'Bottom CTA', [
            'heading'      => 'Talk To Us',
            'subheading'   => 'Get started with Cosgrove by speaking to one of our experts.',
            'button_label' => "Let's Talk",
            'button_url'   => '/contact',
        ], 6);
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function seedAbout(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'about'],
            [
                'title'            => 'About Us',
                'template'         => 'default',
                'status'           => 'published',
                'sort_order'       => 2,
                'is_system'        => true,
                'meta_title'       => null,
                'meta_description' => null,
            ]
        );

        // About page HeaderItem renders only a background image — no heading text
        $this->section($page->id, 'hero', 'Hero section', [
            'heading'    => null,
            'subheading' => null,
        ], 1);

        $this->section($page->id, 'text', 'Company overview', [
            'heading' => 'The Cosgrove Way',
            'body'    => implode("\n\n", [
                'Established in 2017, Cosgrove is at the forefront of disruption in the real estate industry, Cosgrove is shaping new lifestyles with a focus on the integration of revolutionary technology into residential and commercial real estate using sustainable methods.',
                "Cosgrove's leadership team is composed of the industry's highly experienced leaders with a passion for unswerving excellence. As we continue to grow our vision of becoming the leading real estate developer in Africa, the guarantee of integrity, professionalism and reliability remains equal to the best obtainable anywhere in the world.",
                'Our Mission: Constantly transforms urban living in Africa, blending innovative design with advanced technology, while steadfastly prioritising quality, sustainability, and visionary real estate solutions.',
                'Our Vision: Become the gold-standard in next-generation living across Africa. We envision a future where every Cosgrove residence defines the benchmark for luxury, technology, and sustainability, offering homeowners the pinnacle of modern living.',
                "Awards & Recognition: Over the years, our relentless pursuit of excellence has earned us accolades in the industry. We've been recognized as the 'Real Estate Company of the Year' and 'Smart City Developer of the Year' at the Nigeria Housing Awards. Our Chairman/CEO, Mr. Umar Abdullahi, has been honored with the title of Officer of the Order of the Federal Republic (OFR) by the Federal Government, highlighting our profound contribution to the housing industry in Nigeria.",
                "We are also the proud recipients of the prestigious 'Leadership in Smart Housing 2021' award from the Nigerian Institute of Town Planners. At Cosgrove, we continue to set the standard.",
            ]),
        ], 2);

        $this->section($page->id, 'team', 'Team section', [
            'heading'    => 'Meet the Minds Behind Cosgrove',
            'subheading' => 'The Core Team',
        ], 3);

        $this->section($page->id, 'cta', 'Bottom CTA', [
            'heading'      => 'Talk To Us',
            'subheading'   => 'Get started with Cosgrove by speaking to one of our experts.',
            'button_label' => "Let's Talk",
            'button_url'   => '/contact',
        ], 4);
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function seedContact(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'contact'],
            [
                'title'            => 'Contact',
                'template'         => 'contact',
                'status'           => 'published',
                'sort_order'       => 3,
                'is_system'        => true,
                'meta_title'       => null,
                'meta_description' => null,
            ]
        );

        $this->section($page->id, 'contact_form', 'Contact section', [
            'heading'    => 'See it with your eyes.',
            'subheading' => 'Visit a Cosgrove home and experience opulence merged with modern technology first-hand. Fill in the form below and one of our team members will be in touch.',
            'address'    => null,
            'show_map'   => true,
        ], 1);
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function seedAgent(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'agent-registration'],
            [
                'title'            => 'Agent Registration',
                'template'         => 'agent',
                'status'           => 'published',
                'sort_order'       => 4,
                'is_system'        => true,
                'meta_title'       => null,
                'meta_description' => null,
            ]
        );

        $this->section($page->id, 'hero', 'Hero section', [
            'heading'    => 'Agency/ Marketing Agreement Between an Agent and Cosgrove',
            'subheading' => 'Agent Registration',
        ], 1);

        $agentIntroText = <<<'HTML'
<p>Thank you for your interest in marketing our product. Below are the terms and conditions of the contract:</p>
<ol>
  <li>
    <strong>PROCEDURE/SCOPE OF WORK (Digital Marketing)</strong>
    <ul>
      <li>All Social Media materials and content will be provided by Cosgrove and copies will be sent to you for your social media use. You are prohibited from creating social media content on behalf of the COSGROVE brand.</li>
      <li>Deployed resources and staff for ground marketing is entirely up to you; and COSGROVE will not bear any costs related therein.</li>
      <li>Cosgrove will handle all of her Branding and Promotions solely.</li>
      <li>Strategy plan for the client's house(s) such as (Notices of Payment or Payment Reminder letters, Newsletters and Revocation Letters) will be prepared by Cosgrove.</li>
    </ul>
  </li>
  <li><strong>TIME TABLE:</strong> Cosgrove will assure you get all Marketing Tools/Essentials. E.g. (Newsletters and Brochure).</li>
  <li>
    <strong>MARKETING/ MANAGEMENT FEE:</strong> We are not under any obligation to pay <strong>THE AGENT</strong> Marketing / Managerial fee. Cosgrove is responsible for managing its own organization. Cosgrove shall pay a <strong>5%</strong> commission to <strong>THE AGENT</strong> for every sale and this should cover the marketing fee (5% commission) which will be paid on every installment received by Cosgrove.
    <br>Cosgrove shall withhold payment of commission if client's Application Form and Acknowledgement copies of offer letters are not returned.
  </li>
</ol>
<p><strong>* To formally confirm your acceptance of this contract please download the form sign and send to hauwa.labaran@cosgroveafrica.com or ruth.bepeh@cosgroveafrica.com.</strong></p>
<p>* Please fill the form on the right and download the full form <a href="/assets/COSGROVE_AGENT_FORM.docx" target="_blank">HERE</a></p>
HTML;

        $this->section($page->id, 'agent_form', 'Registration form', [
            'heading'     => 'Agent Registration',
            'subheading'  => 'Thank you for your interest in marketing our product. Below are the terms and conditions of the contract:',
            'intro_text'  => $agentIntroText,
            'form_label'  => null,
        ], 2);
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function seedPrivacy(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'privacy'],
            [
                'title'            => 'Privacy Policy',
                'template'         => 'default',
                'status'           => 'published',
                'sort_order'       => 5,
                'is_system'        => true,
                'meta_title'       => null,
                'meta_description' => null,
            ]
        );

        $body = <<<'HTML'
<p>At Cosgrove, we are committed to safeguarding the privacy of our visitors and users. This Privacy Policy outlines the types of information we collect and how we use it. Please read this policy carefully to understand how your personal information will be treated when you use our website, accessible at www.cosgroveafrica.com</p>
<p>This Privacy Policy applies solely to our online activities and is applicable to all visitors to our website concerning the information they provide or we collect.</p>
<p>By using our website, you consent to the practices described in this Privacy Policy and agree to its terms.</p>

<h2>1. Information We Collect</h2>
<p>We collect both personal and non-personal information, which may include but is not limited to:</p>

<h3>Personal Information:</h3>
<p>
  - When you register for an Account, we may collect your contact information, such as your full name, company name, address, email address, and telephone number.<br>
  - If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, the contents of the message, and any attachments you send us.<br>
  - Any other information you choose to provide will be used in accordance with the purposes stated in this Privacy Policy.
</p>

<h3>Non-Personal Information:</h3>
<p>- When you visit our website, we automatically collect certain information, such as internet protocol (IP) addresses, browser type, internet service provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This information is collected through log files and is not linked to personally identifiable information.</p>

<h2>2. How We Use Your Information</h2>
<p>
  We use the information we collect for various purposes, including but not limited to:<br><br>
  - Understanding and analyzing how you use our website.<br>
  - Developing new products, services, features, and functionality.<br>
  - Communicating with you, including customer service, providing updates and information related to the website, and for marketing and promotional purposes.<br>
  - Sending you emails to keep you informed about our services and promotions.
</p>

<h2>3. Log Files</h2>
<p>Cosgrove follows standard procedures by using log files. The information collected through log files is used for analyzing trends, administering the website, tracking users' movements on the site, and gathering demographic information. This information may include IP addresses, browser types, ISP, date and time stamps, referring/exit pages, and click data. Importantly, this data is not linked to personally identifiable information.</p>

<h2>4. Data Sharing</h2>
<p>Cosgrove does not sell customer data to third-party companies or advertising agencies for the purpose of receiving targeted ads. However, we may use the information you provide to tailor advertisements to your interests based on the information you have supplied to us.</p>

<h2>5. Changes to this Privacy Policy</h2>
<p>We reserve the right to update and modify this Privacy Policy at any time.</p>

<h2>6. Contact Us</h2>
<p>If you have any questions or concerns regarding this Privacy Policy or your personal information, please contact us at info@cosgroveafrica.com</p>

<p>By using our website, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.</p>
HTML;

        $this->section($page->id, 'text', 'Privacy policy content', [
            'heading' => 'Privacy Policy for Cosgrove',
            'body'    => $body,
        ], 1);
    }

    // ─────────────────────────────────────────────────────────────────────────

    private function seedTerms(): void
    {
        $page = Page::updateOrCreate(
            ['slug' => 'terms-of-service'],
            [
                'title'            => 'Terms of Service',
                'template'         => 'default',
                'status'           => 'published',
                'sort_order'       => 6,
                'is_system'        => true,
                'meta_title'       => null,
                'meta_description' => null,
            ]
        );

        $body = <<<'HTML'
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using the services provided by Cosgrove Investment LTD ("Cosgrove," "we," "us," or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

<h2>2. Description of Services</h2>
<p>Cosgrove Investment LTD is a pioneering real estate developer that integrates technology and sustainability into residential and commercial properties. Our portfolio features high-value properties designed to appreciate over time; located in Nigeria.</p>

<h2>3. User Registration</h2>
<p>To access certain features of our services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

<h2>4. Property Information</h2>
<p>The information provided on our website or through our services, including property listings, descriptions, pricing, and availability, is for informational purposes only. We do not warrant the accuracy or completeness of this information.</p>

<h2>5. Intellectual Property</h2>
<p>Our services and all related content, including but not limited to text, graphics, logos, images, architectural designs, and software, are protected by intellectual property laws. You may not use, reproduce, distribute, or modify any of our content without our prior written consent.</p>

<h2>6. Privacy Policy</h2>
<p>Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and disclose your information, especially as it relates to real estate transactions.</p>

<h2>7. Real Estate Transactions</h2>
<p>Any real estate transactions facilitated through our services are subject to separate agreements and disclosures, including purchase agreements, rental agreements, and property disclosures. These agreements will govern the terms and conditions of the specific real estate transaction.</p>

<h2>8. Disclaimer of Warranties</h2>
<p>Our services are provided on an "as-is" and "as available" basis. We make no warranties, express or implied, regarding the reliability, accuracy, availability, or fitness for a particular purpose of our services.</p>

<h2>9. Limitation of Liability</h2>
<p>Cosgrove shall not be liable for any indirect, consequential, incidental, special, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use our services.</p>

<h2>10. Termination</h2>
<p>We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for any reason, including if you violate these Terms of Service.</p>

<h2>11. Governing Law</h2>
<p>These Terms of Service shall be governed by and construed in accordance with the laws of The Federal Republic of Nigeria, without regard to its conflict of law principles.</p>

<h2>12. Contact Information</h2>
<p>If you have any questions or concerns regarding these Terms of Service, please contact us at info@cosgroveafrica.com</p>

<h2>13. Changes to Terms of Service</h2>
<p>Cosgrove reserves the right to update and modify these Terms of Service at any time.</p>

<p>By using our services, you acknowledge that you have read, understood, and agree to the terms of these Terms of Service.</p>
HTML;

        $this->section($page->id, 'text', 'Terms content', [
            'heading' => 'Terms of Service for Cosgrove',
            'body'    => $body,
        ], 1);
    }
}
