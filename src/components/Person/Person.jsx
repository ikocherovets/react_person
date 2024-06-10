export const Person = ({ person }) => {
  const renderAge = () => {
    if (person.age) {
      return <p className="Person__age">I am {person.age}</p>;
    }

    return null;
  };

  const renderPartner = () => {
    if (person.isMarried) {
      const partnerLabel = person.sex === 'm' ? 'wife' : 'husband';

      return (
        <p className="Person__partner">
          {person.partnerName} is my {partnerLabel}
        </p>
      );
    }

    return <p className="Person__partner">I am not married</p>;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {renderAge()}
      {renderPartner()}
    </section>
  );
};
