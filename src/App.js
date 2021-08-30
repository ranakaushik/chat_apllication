import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return(
    <ChatEngine 
      height="100vh"
      projectID="72097192-7faa-46e7-a3be-d0a0e1caca7f"
      userName="react_chat"
      userSecret="1234"
      renderChatFeed={(chatAppProps => <ChatFeed { ... chatAppProps} />)}
    /> 
  ); 
}

export default App;