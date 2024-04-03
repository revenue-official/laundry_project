import React, { useState, useEffect } from "react";
import axios from "axios";
import Echo from "laravel-echo";

function SendMessageForm() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const channel = window.Echo.channel("chat-channel").listen(
      "ChatEvent",
      (e) => {
        setMessage(e.message);
      },
    );

    return () => {
      channel.stopListening("ChatEvent");
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(route("chat.store"), { message }).then(({ data }) => {
      console.log(data);
    });
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default SendMessageForm;
