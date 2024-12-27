/* eslint-disable react/prop-types */

import {Button, Card, CardActions, CardContent, Typography} from '@mui/material' 
export default function ListItem({fetchTodoDetails, item}) {
  return (
    <Card
    sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <CardContent>
            <Typography variant='h5' color={'text.secondary'}>{item?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button
                onClick={()=> fetchTodoDetails(item?.id)} 
             sx={{
            backgroundColor: "#000000",
            color: "#fff",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#000000",
              color: "#fff",
              opacity: "1",
            },
          }}>
            Show Details
            </Button>
        </CardActions>
    </Card>
  )
}
