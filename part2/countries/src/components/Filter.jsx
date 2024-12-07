export default function Filter({ countryName, setCountryName }) {
  return (
    <>
      <strong>Find countries</strong>
      &nbsp;
      <input
        type="text"
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
    </>
  );
}
