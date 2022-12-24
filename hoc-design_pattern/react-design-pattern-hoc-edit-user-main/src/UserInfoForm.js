const { withEditableUser } = require("./withEditableUser");

export const UserInfoForm = ({
  user,
  onChangeUser,
  onSaveUser,
  onResetUser,
}) => {
  const { name, age, hairColor } = user || {};
  return user ? (
    <>
      <label>Name:</label>
      <input
        value={name}
        onChange={(e) => onChangeUser({ name: e.target.value })}
      />
      <label>Age:</label>
      <input
        type="number"
        value={age}
        onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
      />
      <label>Hair Color:</label>
      <input
        value={hairColor}
        onChange={(e) => onChangeUser({ hairColor: e.target.value })}
      />

      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save Changes</button>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default withEditableUser(UserInfoForm, "123");
