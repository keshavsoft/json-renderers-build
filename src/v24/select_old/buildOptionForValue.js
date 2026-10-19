import spec from "../spec.json" with { type: "json" };

const buildOptionForValue = (value, optionTemplate = spec.buildOption) => {
    const optionForValue = structuredClone(optionTemplate);

    optionForValue.textContent = optionForValue.textContent.replace("rowValue", value);
    optionForValue.attributes.value = optionForValue.attributes.value.replace("rowValue", value);

    return optionForValue;
};

export default buildOptionForValue;
