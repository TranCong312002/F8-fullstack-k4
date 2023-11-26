import React, { useRef } from "react";
import LogoutButton from "./LogOut";
import Profile from "./Profile";
import emailjs from "@emailjs/browser";
import { useAuth0 } from "@auth0/auth0-react";
function FormMail() {
  const { user } = useAuth0();

  const styleTextarea = {
    resize: "none",
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("vô đây rồi");
    emailjs
      .sendForm(
        "service_fqqu82o",
        "template_ez6c2yk",
        form.current,
        "6vxEG4sDrhwn7kKtV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="container-form">
        <div className="form">
          <form ref={form} className="main-form" onSubmit={sendEmail}>
            <Profile />
            <input
              type="email"
              className="account"
              name="account"
              placeholder="Nhập email vô đây..."
              // value={user.email}
            />
            <textarea
              name="helps"
              id="helps"
              cols="20"
              rows="7"
              style={styleTextarea}
              placeholder="Nhập nội dung vô đây"
            ></textarea>
            <button className="request">YÊU CẦU HỖ TRỢ !</button>
          </form>
          <div className="nav-form">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormMail;
