const Report = () => {
  return (
    <form>
      <div className="mb-3 mt-3">
        <div className="mpy-3">
          <label className="form-label">Place Name:</label>
          <input type="name" className="form-control" id="name" name="name" />
        </div>
        <div className="my-3">
          <label className="form-label">Image of the Place:</label>
          <input
            type="file"
            className="form-control"
            id="place_image"
            name="place_image"
          />
        </div>
        <div className="my-3">
          <label className="form-label">Damage Level:</label>
          <select className="form-control" name="damage_lavel">
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="extrem">Extrem</option>
          </select>
        </div>
        <div className="my-3">
          <label className="form-label">Description about the place:</label>
          <textarea
            className="form-control"
            id="place_image"
            name="place_image"
            rows={5}
          />
        </div>
      </div>
    </form>
  );
};

export default Report;
