import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CoverLetterService from '../../services/coverLetterService'
import { Segment,Container,Icon,Message,Card,Button} from 'semantic-ui-react'
export default function CoverLetter() {
    let {candidateId}=useParams()
    const [coverLetters, setcoverLetters] = useState([])

    useEffect(() => {
       let coverletterService=new CoverLetterService()
       coverletterService.getCoverLetter(candidateId).then(result=>setcoverLetters(result.data.data))
    }, [candidateId])
    return (

        <div>
             <Segment circle="true" vertical>
        <Container>
          <Message color="olive">
            <Message.Header
              textalign="left"
              style={{
                textalign: "left",
                fontSize: "2em",
                color: "purple",
                marginTop: "0.75em",
              }}
            >
              {" "}
              <Icon name="edit" color="violet" /> Ön Yazı{" "}
              <Button
                type="submit"
                floated="right"
                animated
                basic
                color="violet"
                size="large"
                style={{ marginBottom: "1em" }}
              >
                <Button.Content visible>Güncelle</Button.Content>
                <Button.Content hidden>
                  <Icon name="edit" />
                </Button.Content>
              </Button>
            </Message.Header>

            {coverLetters.map((coverLetter) => (
              <Card fluid color="purple" key={coverLetter.id}>
                <Card.Content   style={{
                textalign: "left",
                fontSize: "1.5em",
                color:"black",
                marginTop: "0.75em",
              }}
            >
                 {coverLetter.coverLetter}
                </Card.Content>
              </Card>
            ))}
          </Message>
        </Container>
      </Segment>
        </div>
    )
}
