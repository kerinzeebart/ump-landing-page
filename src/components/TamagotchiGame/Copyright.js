import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '}
      <Link color="inherit" href="#">
        Tamagotchi Inspired Virtual Pet Game
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
