import React, { useState, useEffect } from "react";

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';


import { useHistory } from "react-router-dom";

export default function RegularPage() {
  let history = useHistory();
  
  //States
  const [regularPage, setPage] = useState({
      question: "",
      type: "",
      answers: []
  });

  const [errors, setErrors] = useState({
      question: "",
      type: "",
  });

  //Destructuring
  const { question, type, answers } = regularPage;

  //handlers
  const handleSubmit = () => {
      const errors = validateAll(); //returns errors as well as the JSON object
      if (!hasErrors(errors)) {
        //   const getAnswers = randomiser(answers);
        //   setPage({...regularPage, answers: getAnswers});
      }
  };


  //Validation
  const hasErrorQn = errors.question !== "";
  const validateAll = () => {
    const errorObj = {
        question: "",
        type: "",
    };
    errorObj.question = question === "" ? "Question me senpai" : "";
    setErrors(errorObj);
    return errorObj;
  };
  const hasErrors = (errors) => {
      return !(errors.question === "" && errors.type === "");
  };

  return (
    <React.Fragment>
      <div>
        <Paper elevation={0} square>
          <Box>
            <Typography variant="h2">
                Regular Mode
            </Typography>
            <TextField
                variant="outlined"
                autoFocus
                error={hasErrorQn}
                label="Question"
                helperText={hasErrorQn ? "Please Fill Up this field" : ""}
                onChange={(event) => setPage({...regularPage, question: event.target.value})}
                value={question}
            />
          </Box>
          <Button onClick={handleSubmit}> DECIDE FOR ME </Button>
        </Paper>
      </div>
    </React.Fragment>
  );
}

