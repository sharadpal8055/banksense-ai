import { useState } from "react";

import { addProspect } from "../../services/prospect.service";

function AddProspect({ onAdded }) {
  const [form, setForm] = useState({
    name: "",

    income: "",

    existingEMI: "",

    loanPageVisits: "",

    emiCalculatorUsed: false,

    applyClicked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,

      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    await addProspect({
      ...form,

      income: Number(form.income),

      existingEMI: Number(form.existingEMI),

      loanPageVisits: Number(form.loanPageVisits),
    });

    setForm({
      name: "",

      income: "",

      existingEMI: "",

      loanPageVisits: "",

      emiCalculatorUsed: false,

      applyClicked: false,
    });

    onAdded();
  };

  return (
    <div
      className="
glass
rounded-xl
p-6
mb-10
"
    >
      <h2
        className="
text-xl
font-bold
mb-5
"
      >
        Add New Prospect
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          placeholder="Customer Name"
          onChange={handleChange}
          className="
w-full
p-3
rounded
text-black
"
        />

        <input
          name="income"
          value={form.income}
          placeholder="Monthly Income"
          onChange={handleChange}
          className="
w-full
p-3
rounded
text-black
"
        />

        <input
          name="existingEMI"
          value={form.existingEMI}
          placeholder="Existing EMI"
          onChange={handleChange}
          className="
w-full
p-3
rounded
text-black
"
        />

        <input
          name="loanPageVisits"
          value={form.loanPageVisits}
          placeholder="Loan Page Visits"
          onChange={handleChange}
          className="
w-full
p-3
rounded
text-black
"
        />

        <label>
          <input
            type="checkbox"
            name="emiCalculatorUsed"
            checked={form.emiCalculatorUsed}
            onChange={handleChange}
          />{" "}
          Used EMI Calculator
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="applyClicked"
            checked={form.applyClicked}
            onChange={handleChange}
          />{" "}
          Clicked Apply Button
        </label>

        <button
          className="
block
bg-blue-600
px-6
py-3
rounded
"
        >
          Generate AI Score
        </button>
      </form>
    </div>
  );
}

export default AddProspect;
