import React, { Component } from 'react';
import './App.css';
import { Header, Container, Grid, Segment, Icon, Input, Button, Image } from 'semantic-ui-react';
import PlayerCard from './Components/PlayerCard'

class App extends Component {
  render() {
    return (
      <div>

        {/* TOP OF PAGE */}
        <div className="home-init">
          
          <Container text>
          
            <Header size='huge'><Image size="huge" src="https://s3-us-west-1.amazonaws.com/topdagger/dagger+icon.png" />Top Dagger</Header>
            <Header color='teal' inverted size='big'>Data Driven Sports Ratings in real life</Header>
          </Container>
        </div>
        <Container textAlign='center' style={{padding:'3em 0em 0em 0em'}}>
        <Header size='huge'>Prototype in Development!</Header>
        </Container>

        {/* WHAT IS DAGGER RATING */}
        <Segment style={{ padding: '6em 0em' }} vertical>
          <Grid container columns="2" verticalAlign="middle" stackable >
            <Grid.Column >
              <Header size="large">
              Ratings just like in the Video Games, but in real life
              </Header>
              <p>You ever wonder what 2K ratings would be like in real life? No need to wonder anymore. 
                Dagger ratings tell you. Using a special set of algorithms, your rating will accurately tell you 
                where your skills are at.</p>  
            </Grid.Column>
            
            {/* JOE DAGG RATING CARD */}
            <Grid.Column>
              <PlayerCard/>
            </Grid.Column>

          </Grid>
        </Segment>

        <Segment style={{ padding: '6em 0em' }} vertical>
          <Grid container columns="2" verticalAlign="middle" stackable>
            
            <Grid.Column>
              <Segment  color="teal" container>
                <Grid columns="3" textAlign="center" >
                  <Grid.Column>
                    <Header size="huge">
                      88
                      <Header.Subheader>ovr</Header.Subheader> 
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Icon size="huge" name="long arrow alternate right" color="grey"/>
                  </Grid.Column>
                  <Grid.Column>
                    <Header size="huge" color="green">
                      95
                      <Header.Subheader>ovr</Header.Subheader> 
                    </Header>
                  </Grid.Column>
                </Grid>
              </Segment> 
            </Grid.Column>

            <Grid.Column>
              <Header size="large">
              Like a player? Support them!
              </Header>
              <p>
                If you think their rating will improve, say it with your money. 
                You could win some cash if your favorite player's rating goes up.
                Some of that money goes straight to that athlete's account. 
                <br/><br/>
                Everybody Wins!
              </p>  
            </Grid.Column>

          </Grid>
        </Segment>

        {/* RATING BETS */}
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container textAlign="center">
            <Header size="large">
              Want to stay updated? Become an early adopter? Join the team?
              <Header.Subheader>Sign up to receive special updates about Top Daggers with your email.</Header.Subheader>
            </Header>
            <Header size="huge">Over 100+ people want in!</Header>
             <Container text>
              <form name="email" method="POST" netlify>
                <input type="hidden" name="form-name" value="email" />
                <Input type="email" name="email" fluid icon={{ name: 'at', circular: true, link: true }} placeholder='Email' /> 
                <br/>
                <Button positive animated='fade' type="submit">
                  <Button.Content visible>Sign Up!</Button.Content>
                  <Button.Content hidden>
                    <Icon name='thumbs up outline' />
                  </Button.Content>
                </Button>
              </form>
            </Container>
            
          </Container> 
          
        </Segment> 

      </div> 
    );
  }
}

export default App;
