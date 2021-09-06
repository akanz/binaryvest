import * as Yup from 'yup'

export const initialValues = {
    payOption: "",
    packageOption: "",
    email: "",
    amount: "",
    proof_of_payment: "",
  };
  export const validationSchema = Yup.object({
    packageOption: Yup.string().required('Select a package'),
    email: Yup.string().email('Email is not valid').required('Please input your email'),
    amount: Yup.number('Amount is not valid').required('Enter an amount'),
  });
  export const payOptions = [
    { key: "crypto", value: "crypto", id: "1", text: "Pay with Cryptocurrency", },
    { key: "card", value: "card", id: "2", text: "Pay with Card" },
  ];
  
  export const packageOptions = [
    {
      key: "Standard ( 35% ROI )",
      value: "standard",
      id: "1",
      text: "Amount ( Between $50 - $499)",
    },
    {
      key: " Ruby( 45% ROI )",
      value: "ruby",
      id: "2",
      text: "Amount ( Between $500 - $4,999)",
    },
    {
      key: "Gold ( 60% ROI )",
      value: "gold",
      id: "3",
      text: "Amount ( Between $5000 - $49,999)",
    },
    {
      key: "Diamond ( 70% ROI )",
      value: "diamond",
      id: "4",
      text: "Amount ( Between $50000 - $499,999)",
    },
    {
      key: "Platinum ( > 80% ROI )",
      value: "platinum",
      id: "5",
      text: "Amount ($500,000 and Above)",
    },
  ];