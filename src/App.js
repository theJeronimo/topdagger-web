import React, { Component } from 'react';
import './App.css';
import { Header, Container, Grid, Segment, Icon, Input, Button, Divider } from 'semantic-ui-react';
import PlayerCard from './Components/PlayerCard'

class App extends Component {
  render() {
    return (
      <div>

        {/* TOP OF PAGE */}
        <div className="home-init">
          <Container text>
            
            <Header size='huge' inverted><Icon inverted name='hand lizard'/>Top Dagger</Header>
            <Header color='teal' size='big'>Data Driven Sports Ratings IRL</Header>
          </Container>
        </div>

        

        {/* WHAT IS DAGGER RATING */}
        <Segment style={{ padding: '6em 0em' }} vertical>
          <Grid container columns="2" verticalAlign="middle" stackable >
            <Grid.Column >
              <Header size="large">
              Ratings just like in the Video Games, but IRL
              </Header>
              <p>You ever wonder what 2K ratings would be like in real life? No need to wonder anymore. 
                Dagger ratings tell you.</p>  
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
              Want to stay updated? Become an early adopter?
              <Header.Subheader>Sign up for updates with your email</Header.Subheader>
            </Header>
            <Header size="huge">25,526 people want in!</Header>
            <Container text>
              <Input fluid icon={{ name: 'at', circular: true, link: true }} placeholder='Email' />
            </Container>
            <br/>
            <Button positive animated='fade'>
              <Button.Content visible>Sign Up!</Button.Content>
              <Button.Content hidden>
                <Icon name='thumbs up outline' />
              </Button.Content>
            </Button>
          </Container>
        </Segment>

      </div> 
    );
  }
}

export default App;
