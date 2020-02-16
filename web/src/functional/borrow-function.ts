import axios from "axios";

async function request() {
  const { data } = await axios.post(
    "https://us-central1-flownizer.cloudfunctions.net/request_guard",
    {
      current_request_number: 10,
      date_start: new Date().toISOString(),
      date_end: new Date().toISOString(),
      org_title: "ทดสอบ",
      site: "bangkok",
      detail:
        "ขาดแคลนพนักงานรักษาความปลอดภัยจำนวนมาก อยากให้มาช่วยงานในวันดังกล่าว"
    }
  );
  return data.address;
}

async function startRequest(address: string) {
  const { data } = await axios.post(
    "https://us-central1-flownizer.cloudfunctions.net/start_request",
    {
      contract_address: address
    }
  );
  return data.address;
}

async function contribute(
  contract_address: string,
  number: string,
  title: string
) {
  const {
    data
  } = await axios.post(
    "https://us-central1-flownizer.cloudfunctions.net/contribute",
    { contract_address, number, title }
  );
  return data.address;
}

async function accpet(contract_address: string) {
  const {
    data
  } = await axios.post(
    "https://us-central1-flownizer.cloudfunctions.net/accept_request",
    { contract_address }
  );
  return data.address;
}

async function cancel(contract_address: string) {
  const {
    data
  } = await axios.post(
    "https://us-central1-flownizer.cloudfunctions.net/cancel_request",
    { contract_address }
  );
  return data.address;
}
