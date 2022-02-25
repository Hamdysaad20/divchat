import React from "react";
import MessageArea from "../components/messageComponents/MessageArea";
import SidebarM from "../components/messageComponents/SidebarM";

function chat() {
  return (
    <div className='flex w-full h-full  overflow-hidden '>
     <div className='flex overflow-hidden h-screen'>
     <SidebarM />
     
        <MessageArea />
      
     </div>
    </div>
  );
}

export default chat;
