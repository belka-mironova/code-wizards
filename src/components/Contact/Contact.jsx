import React from "react";
import "./contact.css";

export const Contact = (props) => {
  return (
    <div class="container contact-form">
      <div
        style={{
          display: "flex",
          flexDirecton: "row",
          gap: "15px",
          margin: "auto 0",
        }}
      >
        <div className="header">
          <div class="contact-image">
            <img
              src="https://image.ibb.co/kUagtU/rocket_contact.png"
              alt="rocket_contact"
            />
          </div>
          <div>
            <h3>Свяжитесь с нами</h3>
            <p>
              Вы смотрите бета-версию сайта. Оставьте свой отзыв, расскажите,
              понравился ли вам наш сервис <br/>
              <a href='https://www.figma.com/file/iCaXr5WxENzOJKBHaPuJWj/CodeWizards?node-id=0%3A1' target='_blank'>Ссылка на прототип в Figma</a>
            </p>
          </div>
        </div>

        <form 
          style={{
            width: "400px",
            display: "flex",
            flexDirecton: "column",
            gap: "15px",
            margin: "25px ",
          }}
        onSubmit={props.handleContactForm}
        >
          <div class="row">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Имя *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Email *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Номер телефона *"
                value=""
              />
            </div>

            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Текст сообщения *"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="btnSubmit"
                class="btnContact btn btn-primary"
                value="Отправить"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
