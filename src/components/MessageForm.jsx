import {useState} from 'react' ;
import { sendMessage, isTyping  } from 'react-chat-engine';



const MessageForm = (props)=>{
  const [value , setValue] =  useState('');
  const {chatID, creds} = props;
  const authObject = {'Project-ID': '72097192-7faa-46e7-a3be-d0a0e1caca7f', 'user-name': 'react_chat', 'user-secret': '1234'}


  const handleSubmit =(event)=>{
    event.preventDefault();
    const text = value.trim()
    if (text.length > 0) sendMessage(creds, chatID, {text})

  }


  const handleChange =(event)=>{
    setValue(event.target.value);
    console.log(props);
    console.log(chatID);
    isTyping(authObject, chatID, props)

  }
  return (
    <div className="div">

      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="send a message ..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );

}

export default MessageForm; 