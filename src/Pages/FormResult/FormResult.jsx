import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const FormResult = () => {
  const [formData, setFormDate] = useState(null);

  useEffect(() => {
    const getFormData = localStorage.getItem("formData");
    setFormDate(JSON.parse(getFormData));
    console.log(JSON.parse(getFormData));
  }, []);

  const handlePrint = (e) => {
    e.preventDefault();
    console.log("Clicking");
    // const printContent = printableContentRef.current.innerHTML;
    // const originalContents = document.body.innerHTML;
    // console.log(printContent)

    // document.body.innerHTML = printContent;
    // window.print();

    // // Restore original content asynchronously to ensure it happens after print dialog is closed
    // setTimeout(() => {
    //   document.body.innerHTML = originalContents;
    // }, 100);
    // var content = document.getElementById("printableContent");
    // var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    // pri.document.open();
    // pri.document.write(content.innerHTML);
    // pri.document.close();
    // pri.focus();
    // pri.print();
    window.print();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "30px",
            textAlign: "center",
            mb: "50px",
          }}
          className="no-print"
        >
          Print Your Result
        </Typography>
        <Typography sx={{ mb: "15px", fontSize: "20px", pl: "10px" }}>
          {formData?.name}
        </Typography>
        <iframe
          id="ifmcontentstoprint"
          style={{
            height: "0",
            width: "0",
            position: "absolute",
            opacity: "0",
          }}
          title="Print Content"
          className="no-print"
        >
          <Box
            sx={{
              width: "95%",
              mx: "auto",
              maxWidth: "600px",
              border: "3px solid #666",
              borderRadius: "10px",
              px: "20px",
              py: "10px",
              bgcolor: "#f9f9f9",
            }}
          >
            {formData && formData?.answers && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {formData.answers.map((item, index) => (
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        md: "70px",
                      },
                      fontWeight: "600",
                      mx: "5px",
                    }}
                    key={index}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </iframe>
        <Box
          sx={{
            width: "95%",
            mx: "auto",
            maxWidth: "600px",
            border: "3px solid #666",
            borderRadius: "10px",
            px: "20px",
            py: "10px",
            bgcolor: "#f9f9f9",
          }}
          id="printableContent"
        >
          {formData && formData?.answers && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {formData.answers.map((item, index) => (
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "70px",
                    },
                    fontWeight: "600",
                    mx: "5px",
                  }}
                  key={index}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", mt: "30px" }}
          className="no-print"
        >
          <Button variant="contained" onClick={handlePrint}>
            Print Answers
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormResult;
