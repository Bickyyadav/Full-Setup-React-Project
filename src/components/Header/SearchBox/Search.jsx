import { Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";
const index = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="Search For Product..." />
      <Button>
        <CiSearch />
      </Button>
    </div>
  );
};

export default index;
