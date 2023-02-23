// import CssBaseline from "@mui/material/CssBaseline";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import React from "react";
// import Fade from "react-reveal/Fade";
// import "../Styles/Contact.css";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#54B65B",
//     },
//     secondary: {
//       main: "#fff",
//     },
//   },
// });

// export default function Contact() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid
//         className="bg-contact"
//         container
//         component="main"
//         sx={{ margin: "50px 0" }}
//       >
//         <CssBaseline />
//         <Grid
//           className="flex flex-col items-center justify-center w-full pb-10 lg:pb-0"
//           item
//           xs={false}
//           sm={4}
//           md={6}
//         >
//           <div>
//             <Fade down>
//               <h1 className="text-3xl lg:text-6xl text-center font-bold text-[#fff] lg:my-10">
//                 Contact
//               </h1>
//               <h2 className="lg:text-5xl font-bold text-center text-[#6BF176]">
//                 +8801700-000000
//               </h2>
//               <h4 className="lg:text-xl font-bold text-center text-[#6BF176]">
//                 Bogra, Bangladesh
//               </h4>
//             </Fade>
//           </div>
//         </Grid>
//         <Grid
//           className="bg-contact rounded-md"
//           sx={{ backgroundColor: "#02201A" }}
//           item
//           xs={12}
//           sm={8}
//           md={5}
//           component={Paper}
//           elevation={6}
//           square
//         >
//           <Fade up>
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 1 }}
//               >
//                 <input
//                   type="text"
//                   required
//                   placeholder="Your Name"
//                   className="bg-[#0281314a] text-[#6BF176] py-3 px-3 rounded-md w-full focus:outline-none placeholder-[#1c6524] my-3"
//                 />
//                 <input
//                   type="text"
//                   required
//                   placeholder="Your Email"
//                   className="bg-[#0281314a] text-[#6BF176] py-3 px-3 rounded-md w-full focus:outline-none placeholder-[#1c6524] my-3"
//                 />
//                 <input
//                   type="text"
//                   required
//                   placeholder="Phone Number"
//                   className="bg-[#0281314a] text-[#6BF176] py-3 px-3 rounded-md w-full focus:outline-none placeholder-[#1c6524] my-3"
//                 />
//                 <input
//                   type="text"
//                   required
//                   placeholder="Your Address"
//                   className="bg-[#0281314a] text-[#6BF176] py-3 px-3 rounded-md w-full focus:outline-none placeholder-[#1c6524] my-3"
//                 />
//                 <textarea
//                   type="text"
//                   required
//                   placeholder="Your Message"
//                   className="bg-[#0281314a] text-[#6BF176] py-3 px-3 rounded-md w-full focus:outline-none placeholder-[#1c6524] my-3"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-[#079C34] w-full p-3 rounded-md my-4"
//                 >
//                   Send Message
//                 </button>
//               </Box>
//             </Box>
//           </Fade>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
import React from "react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { Fade, Zoom } from "react-reveal";

const Contact = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <Zoom>
        <div className="bg-[#028131de] p-14 flex flex-col lg:flex-row items-center justify-between z-10 lg:mt-[-100px] mt-[-180px] text-[#6BF176] w-11/12 absolute rounded-lg">
          <div>
            <h4 className="font-bold">Need Any Consultations ?</h4>
            <h1 className="lg:text-4xl text-2xl font-bold text-[#fff] my-3">
              We’re Ready to Growth IT Business
            </h1>
          </div>
          <div className="flex items-center">
            <div>
              <Zoom forever={true}>
                <div className="border border-[#6bf176] rounded-full p-2">
                  <div className="bg-[#6bf176] p-5 rounded-full">
                    <LocalPhoneRoundedIcon style={{ color: "#02411C" }} />
                  </div>
                </div>
              </Zoom>
            </div>
            <div>
              <h5 className="mx-5 font-bold">Hotline</h5>
              <h4 className="mx-5 font-bold text-2xl text-[#fff]">
                +8809638680048
              </h4>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Contact;
