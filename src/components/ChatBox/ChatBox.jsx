import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets/assets.js";

const ChatBox = () => {
  return (
    <div className="chat-box">
      {/* Top User Info */}
      <div className="chat-user">
        <img src={assets.profile_img} alt="profile" />
        <p>
          Ayan Mishra
          <img className="dot" src={assets.green_dot} alt="online" />
        </p>
        <img src={assets.help_icon} alt="help" />
      </div>

      {/* Messages Container */}
      <div className="chat-msg">
        {/* Sender Message */}
        <div className="s-msg">
          <p className="msg">Hello this is testing text.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:20 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:20 PM</p>
          </div>
        </div>

        {/* Receiver Message */}
        <div className="r-msg">
          <p className="msg">Hello this is testing text.</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:21 PM</p>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="chat-input">
        <input type="text" placeholder="Send a message" />

        <input type="file" accept="image/png, image/jpeg" hidden id="image" />

        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="gallery" />
        </label>

        <img src={assets.send_button} alt="send" />
      </div>
    </div>
  );
};

export default ChatBox;
