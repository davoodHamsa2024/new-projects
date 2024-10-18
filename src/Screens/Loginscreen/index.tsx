// import React, { useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import { Button, Col, Form, Input, notification, Row } from 'antd';
// import { FcAndroidOs } from "react-icons/fc";
// import { FcGoogle } from "react-icons/fc";
// import './style.scss';
// // import { useNavigate } from "react-router-dom";

// const LoginScreen = () => {
//   interface LoginFormValues {
//     email: string;
//     password: string;
//   }
  
//   // const navigate = useNavigate();

//   const generateToken = () => {
//     return crypto.randomUUID(); 
//   };

//   const logout = () => {

//     localStorage.removeItem("authToken");
//     localStorage.removeItem("tokenExpiration");


//     notification.info({ message: "You have been logged out due to inactivity." });


//     // navigate("/");
//      };

//   const onFinish = async (values: LoginFormValues) => {
//     const { email, password } = values;

//     if (email === "admin@gmail.com" && password === "admin123") {
//       try {
//         const token = generateToken(); 
//         const expirationTime = Date.now() + 40 * 1000; 

       
//         localStorage.setItem("authToken", token);
//         localStorage.setItem("tokenExpiration", expirationTime.toString());

//         notification.success({ message: "Successfully logged in" });
//         // navigate("/Dashboard");

    
//         setTimeout(() => {
//           logout();
//         }, 200 * 1000); 
//       } catch (error) {
//         console.error("Error generating token:", error);
//         notification.error({ message: "Token generation failed!" });
//       }
//     } else {
//       notification.error({ message: "Incorrect email or password!" });
//     }
//   };

//   useEffect(() => {
   
//     const tokenExpiration = localStorage.getItem("tokenExpiration");
//     if (tokenExpiration && Date.now() > Number(tokenExpiration)) {
//       logout(); 
//     }
//   }, []);

//   return (
//     <div className='main'>
//       <Card className='card1'>
//         <h2 style={{ marginBottom: '20px', marginTop: '40px', font: 'ui-monospace' }}>
//           Sign in Admin panel
//         </h2>
//         <div className='p1'>Track buses, manage routes</div>
//         <div className='p1'>Start your journey with smarter bus tracking</div>
//         <Form onFinish={onFinish}>
//           <Form.Item
//             name='email'
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input placeholder='Enter your email' className='inputclass' style={{ marginTop: '30px' }} />
//           </Form.Item>

//           <Form.Item
//             name='password'
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password placeholder='Password' className='inputclass' />
//           </Form.Item>
          
//           <Form.Item>
//             <Button type='primary' htmlType='submit' style={{ width: '85%', height: '45px', backgroundColor: 'black' }}>
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//         <Row>
//           <Col md={9} className='main3'></Col>
//           <Col md={6} className='main3'>
//             <div style={{ width: '100%', display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
//               <FcAndroidOs size={40} />
//               <FcGoogle size={30} />
//             </div>
//           </Col>
//           <Col md={9} className='main3'></Col>
//         </Row>
//       </Card>
//     </div>
//   );
// };

// export default LoginScreen;








import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Form, Input, notification, Row } from 'antd';
import { FcAndroidOs } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import './style.scss';

const LoginScreen = () => {
  interface LoginFormValues {
    email: string;
    password: string;
  }

  const logout = () => {
    // Clear session storage on logout
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("sessionExpiration");

    notification.info({ message: "You have been logged out due to inactivity." });
  };

  const onFinish = async (values: LoginFormValues) => {
    const { email, password } = values;

    if (email === "admin@gmail.com" && password === "admin123") {
      try {
        const expirationTime = Date.now() + 40 * 1000; // Session expiration time (e.g., 40 seconds)

        // Store session information
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("sessionExpiration", expirationTime.toString());

        notification.success({ message: "Successfully logged in" });

        // Automatically log out after session expiration time (40 seconds in this case)
        setTimeout(() => {
          const currentExpiration = sessionStorage.getItem("sessionExpiration");
          if (currentExpiration && Date.now() > Number(currentExpiration)) {
            logout(); // Log out when session expires
          }
        }, 40 * 1000); // Check for expiration after 40 seconds
      } catch (error) {
        console.error("Error during login:", error);
        notification.error({ message: "Login failed!" });
      }
    } else {
      notification.error({ message: "Incorrect email or password!" });
    }
  };

  return (
    <div className='main'>
      <Card className='card1'>
        <h2 style={{ marginBottom: '20px', marginTop: '40px', font: 'ui-monospace' }}>
          Sign in Admin panel
        </h2>
        <div className='p1'>Track buses, manage routes</div>
        <div className='p1'>Start your journey with smarter bus tracking</div>
        <Form onFinish={onFinish}>
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Enter your email' className='inputclass' style={{ marginTop: '30px' }} />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' className='inputclass' />
          </Form.Item>
          
          <Form.Item>
            <Button type='primary' htmlType='submit' style={{ width: '85%', height: '45px', backgroundColor: 'black' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col md={9} className='main3'></Col>
          <Col md={6} className='main3'>
            <div style={{ width: '100%', display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
              <FcAndroidOs size={40} />
              <FcGoogle size={30} />
            </div>
          </Col>
          <Col md={9} className='main3'></Col>
        </Row>
      </Card>
    </div>
  );
};

export default LoginScreen;
