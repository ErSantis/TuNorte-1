export const InformationSection = ({ info }: { info: any }) => {
  return (
    <section className="et-slide" id="tab-information">
      <h1>Informacion</h1>
      <br />
      {info.ProfName.map((prof: string, index: number) => (
        <div key={index}>
          <h3>Profesor: {prof}</h3>
          <h3>Email: {info.ProfEmail[index]}</h3>
          <br />
        </div>
      ))}
      <h3>Departamento : {info.NameDept}</h3>
    </section>
  );
};