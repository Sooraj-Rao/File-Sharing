import * as React from "react";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({ response }) => (
  <Html>
    <Head />
    <Preview>Yelp recent login</Preview>
    <Body style={main}>
      <Container>
        <Section style={content}>
          <Row style={{ ...boxInfos, paddingBottom: "0" }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hi {response?.emailToSend?.split("@")[0]}
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {response.userName} shared this file!
              </Heading>

              <Text style={paragraph}>
                <b>File:{response?.fileName} </b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>File-type:{response?.fileType} </b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Size:{response?.fileSize} </b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Short-URL:{response?.shortUrl} </b>
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                <b>Download-URL:{response?.download} </b>
              </Text>

              <Text style={paragraph}>
                If this was you, there's nothing else you need to do.
              </Text>
              <Text style={{ ...paragraph, marginTop: -5 }}>
                If this wasn't you or if you have additional questions, please
                see our support page.
              </Text>
            </Column>
          </Row>
          <Row style={{ ...boxInfos, paddingTop: "0" }}>
            <Column style={containerButton} colSpan={2}>
              <a style={button} href={response?.download}>
                Download File
              </a>
            </Column>
          </Row>
        </Section>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(0,0,0, 0.7)",
          }}
        ></Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "black",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: 3,
  color: "white",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
