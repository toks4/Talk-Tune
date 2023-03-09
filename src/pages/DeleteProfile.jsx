import React from 'react'
import { Button, Card } from 'antd';


  // Iteration 2
  function DeleteProfile({profile, profileDelete}) {

    const deleteCard = () => {
        profileDelete(profile.name)
    }

    return (
        <Card
            title={podCast.firstname}
            style={{ width: 230, height: 300, margin: 10 }}
                >
            <p>Last name {food.lastname}</p>
            
            
            <Button type="primary" onClick={ deleteCard }> Delete </Button>
        </Card>
    );
  }
  
  export default DeleteProfile;