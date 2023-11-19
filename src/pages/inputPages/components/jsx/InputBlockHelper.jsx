import React from "react";
import { Button } from "@mui/material";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../css/InputBlockHelper.css";

const InputBlockHelper = () => {
  const matrixSize = parseInt(sessionStorage.getItem("matrixSize"));
  const startRow = parseInt(sessionStorage.getItem("startRow"));
  const startCol = parseInt(sessionStorage.getItem("startCol"));
  const blocksMatrix = [];

  const matrixItemClicked = (rowIndx, colIndx) => {
    if (rowIndx === startRow && colIndx === startCol) {
      alert("You can't place a block on Jerry's Position!");
      return;
    }

    const blockClicked = document
      .querySelectorAll(".matrixBuilder-rows")
      [rowIndx].querySelectorAll(".matrixBuilder-rows-items")[colIndx];

    if (blockClicked.classList.contains("block-selected")) {
      blockClicked.classList.remove("block-selected");
      const index = blocksMatrix.findIndex(
        (item) => item.rowIndx === rowIndx && item.colIndx === colIndx
      );
      blocksMatrix.splice(index, 1);
      return;
    }

    blockClicked.classList.add("block-selected");
    blocksMatrix.push({ rowIndx, colIndx });
  };

  return (
    <>
      <div className="size-input">Place the Blocks :</div>
      <div className="matrixBuilder">
        {[...new Array(matrixSize)].map((_, index) => {
          const rowIndx = index;
          return (
            <div className="matrixBuilder-rows" key={rowIndx}>
              {[...new Array(matrixSize)].map((_, index) => {
                const colIndx = index;
                return (
                  <div
                    className="matrixBuilder-rows-items"
                    key={colIndx}
                    onClick={() => matrixItemClicked(rowIndx, colIndx)}
                    style={{
                      cursor:
                        startRow === rowIndx && startCol === colIndx
                          ? "no-drop"
                          : "default",
                    }}
                  >
                    {startRow === rowIndx && startCol === colIndx && (
                      <img
                        className="jerry_img"
                        src="images/jerry.png"
                        style={{ opacity: 1 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Button
        variant="contained"
        sx={{ pl: 2, pr: 2 }}
        endIcon={<WifiProtectedSetupIcon />}
        onClick={() => {
          const numberBlocks = Math.ceil(
            Math.random() * matrixSize * matrixSize
          );
          for (let i = 0; i < numberBlocks; i++) {
            const randomRow = Math.floor(Math.random() * matrixSize);
            const randomCol = Math.floor(Math.random() * matrixSize);
            if (randomRow === startRow && randomCol === startCol) {
              continue;
            }
            matrixItemClicked(randomRow, randomCol);
          }
        }}
      >
        Generate
        <br />
        Random
      </Button>
      <div className="navigationButtons">
        <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />}>
          Back
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          disabled={!startRow && !startCol}
          onClick={() => {
            const jsonArray = JSON.stringify(blocksMatrix);
            sessionStorage.setItem("blocksMatrix", jsonArray);
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default InputBlockHelper;
