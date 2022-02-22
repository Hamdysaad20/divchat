import React from "react";
import { Avatar, Grid, Text } from "@nextui-org/react";

function chat() {
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
  ];

  return (
    <div className=''>
      <aside className='w-60 h-screen lg:w-72 ml-20 bg-gray-900/80 '>
        <div className='justify-center text-center hover:bg-slate-900 duration-500 py-2 bg-gray-900'>
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

        {chatUsers.map(({ userImg, userName, userText }) => (
          <div className=' hover:bg-gray-700/50 ' key={userName}>
            <Grid.Container gap={2}>
              <Grid>
                <Avatar
                  src={userImg}
                  size='lg'
                  color='gradient'
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
                    textGradient: "1deg, $pink500 -80%, $white 90%",
                  }}
                  weight='bold'>
                  {userName}
                </Text>

                <h1 id='chatmessageSide'>{userText}</h1>
              </div>
            </Grid.Container>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default chat;
