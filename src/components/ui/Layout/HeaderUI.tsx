import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const HeaderUI = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 0 }}>
      <Container>
        <Toolbar sx={{ height: '90px' }} disableGutters>
          <Typography
            variant="h3"
            component="a"
            href="/"
            sx={{
              fontWeight: 900,
              color: '#3F72AF',
              textDecoration: 'none',
            }}
          >
            메이플 사냥터 효율
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderUI;
