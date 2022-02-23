import { Grid, Avatar, Text } from "@nextui-org/react";
import React from "react";

function UserChat() {
  return (
    <div className='bg-gray-900 w-full h-20'>
      <div>
        <Grid.Container gap={2}>
          <Grid>
            <Avatar src='/divico.png' size='lg' color='error' bordered zoomed />
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
              Hamdy Saad
            </Text>

            <h1 className='text-green-300'>Online</h1>
          </div>
        </Grid.Container>
      </div>
    </div>
  );
}

export default UserChat;
