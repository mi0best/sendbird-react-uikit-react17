import { useState } from 'react';
import  SendbirdApp  from "@sendbird/uikit-react/App";
import '@sendbird/uikit-react/dist/index.css'

const APP_ID = "0D0E3596-9380-482A-BE90-DD0307A8F786";
const USER_ID = "Demo User";

function Chat() {
  const [ data, setData ] = useState(null);
  return (
    <div className="App">
        <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
}

export default Chat;