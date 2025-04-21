import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function FAQ() {
  const faqs = [
    {
      q: "What credit score do I need to apply for a credit card?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      q: " How can I apply for a credit card online?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      q: "Are there any annual fees associated with the credit card?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      q: "How long does it take to receive the credit card once approved?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      q: " How can I check my credit card balance and transactions?",
      a: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
  ];
  return (
    <div className="text-center max-w-[1200px] mx-auto ">
        <h3 className="text-[40px] font-bold my-5">FAQs</h3>
      {faqs.map((items, i) => (
        <div key={i} className="space-y-3">
          <Accordion sx={{backgroundColor:"#27322F3D",color:"white"}}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={{color:"white"}} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" sx={{fontSize:"24px",fontWeight:"bold"}}>{items.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{color:"#ADB2B1",fontSize:"16px"}}>{items.a}</Typography>
            </AccordionDetails>
          </Accordion>
          <hr className=" border-b-1 my-5 " />
        </div>
      ))}
    </div>
  );
}
