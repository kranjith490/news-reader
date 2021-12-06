import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const CustomeButton = ({ publisher }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log(publisher);
    const encodedURI = encodeURIComponent(publisher);
    navigate(`/Publisher/${encodedURI}`);
  };
  return (
    <Button
      id={publisher}
      variant="contained"
      color="primary"
      onClick={handleNavigation}
    >
      {publisher}
    </Button>
  );
};

export default CustomeButton;
