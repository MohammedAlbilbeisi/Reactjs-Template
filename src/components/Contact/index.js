import React from "react";

import { ContactSeaction, ContactTitle, Span ,Form, Input, FormInput, InputText, InputEmail, InputExp, Textarea ,  InputSubmit} from  "./style.js"


function Contact() {
    return (
     
<ContactSeaction>
            <div class="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" className="sub" placeholder="Your Subject" />
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSeaction>
        



     
    )
  }
  
  export default Contact;