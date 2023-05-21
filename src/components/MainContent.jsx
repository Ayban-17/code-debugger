import React, { useState } from "react";
import { useMutation } from "react-query";
import { Button, TextField } from "@mui/material";
import Answer from "./Answer";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

const MainContent = () => {
  const [language, setlanguage] = useState("");
  const [code, setCode] = useState("");
  const [answer, setAnswer] = useState("");
  const url = process.env.REACT_APP_API;

  const mutation = useMutation((data) => axios.post(url, data), {
    onSuccess: (response) => {
      setAnswer(response.data.msg);
    },
    onError: (error) => {
      console.log("The error is", error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutation.mutateAsync({ language, code });
  };

  const { isLoading, isError, error } = mutation;

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MutatingDots
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={80}
        />
      </div>
    );
  }

  if (isError) {
    return <h1 className="text-5xl"> {error}</h1>;
  }

  return (
    <main className=" border-2 border-indigo-500 p-2 grid gap-y-4 lg:grid-cols-2 lg:p-12">
      <form className="flex flex-col gap-y-4 p-2 " onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setlanguage(e.target.value)}
          required
          label="Programming Language"
          fullWidth
          variant="outlined"
          size="small"
          value={language}
          InputLabelProps={{
            style: {
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
            },
          }}
          inputProps={{
            style: {
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
            },
          }}
          sx={{
            "& fieldset": {
              borderColor: "#6366f1",
            },
          }}
        />
        <textarea
          onChange={(e) => setCode(e.target.value)}
          value={code}
          className="bg-transparent border-2  border-indigo-500 w-full p-3 h-96 text-white rounded-md resize-none"
          placeholder="Paste Your Code Here..."
        ></textarea>
        <Button type="submit" variant="outlined" fullWidth>
          SUBMIT CODE
        </Button>
      </form>
      <Answer answer={answer} />
    </main>
  );
};

export default MainContent;
