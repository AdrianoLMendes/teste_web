import * as React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import "./error-page.css";

function ErrorPage() {
  return (
    <>
      <Container maxWidth="sm">
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h2 className="h2">Parece que você está perdido...</h2>
                    <p>
                      a página que você está procurando não está disponível!!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Grid className="link">
          <Grid>
            <Link href="/" underline="none" variant="body2">
              Ir para login
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ErrorPage;