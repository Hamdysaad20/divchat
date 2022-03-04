import React from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";

function SidebarM() {
  const chatUsers = [
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
      
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
    {
      userImg: "/divico.png",
      userName: "Hamdy Saad",
      userText: "ssssssssssssssssssss",
    },
  ];

  return (
    <div className='h-screen overflow-hidden duration-300 '>
      <aside className='w-60  h-full lg:w-72 ml-20 bg-gray-900/80 '>
        <div className='w-full'>
          <div className='mb-2 sticky  select-none cursor-pointer justify-center text-center hover:bg-slate-900 duration-500 py-2 bg-gray-900'>
            <Text
              h1
              size={20}
              css={{
                textGradient: "45deg, $blue500 -20%, $pink500 50%",
              }}
              weight='bold'>
              Divzoon Chat
            </Text>
          </div>
        </div>
<div className='scroll-mb-10 overflow-hidden hover:overflow-y-scroll  h-screen'>
        {chatUsers.map(({ userImg, userName, userText }) => (
          <div className=' ' key={userName}>
            <div className=' hover:bg-gray-700/50'>
              <Grid.Container gap={2}>
                <Grid>
                  <Avatar
                  className="z-10"
                    src={userImg}
                    size='lg'
                    color='error'
                    bordered
                    zoomed
                  />
                </Grid>
                <div>
                  <Text
                    className='mt-2'
                    h1
                    size={20}
                    css={{
                      textGradient: " $white -80%, $white 90%",
                    }}
                    weight='bold'>
                    {userName}
                  </Text>

                  <h1 id='chatmessageSide'>{userText}</h1>
                </div>
              </Grid.Container>
            </div>
          </div>
        ))}</div>
      </aside>
      
    </div>
  );
}

export default SidebarM;
