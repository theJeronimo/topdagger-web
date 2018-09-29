import React, { Component } from 'react';
import './App.css';
import { Header, Container, Grid, Segment, Icon } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }}  vertical>
          <Container text>
            <Header size='huge'>Top Dagger</Header>
            <Header color='grey' size='big'>Data Driven Sports Ratings IRL</Header>
          </Container>
        </Segment>
        <Segment style={{ padding: '4em 0em' }} vertical>
          <Grid container columns="2">
            <Grid.Column>
              <Header size="large">
              Ratings just like in the Video Games, but IRL
              </Header>
              <p>You ever wonder what 2K ratings would be like in real life? No need to wonder anymore.</p>
            </Grid.Column>
            <Grid.Column>
              <Segment container>
                <Grid>
                  <Grid.Row textAlign="center" centered>
                      <Header size="large" icon>
                        <Icon name="user" size="huge"/>
                        Joe Daggs
                        <Header.Subheader>Team Dagger 3</Header.Subheader>
                      </Header>
                  </Grid.Row>
                  <Grid.Row  columns="3">
                    <Grid.Column textAlign="center">
                      <Header size="large">
                        94
                        <Header.Subheader>off</Header.Subheader>
                      </Header>
                      
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                      <Header size="large">
                        89
                        <Header.Subheader>def</Header.Subheader>
                      </Header>
                      
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                      <Header size="large">
                        92
                        <Header.Subheader>ovr</Header.Subheader> 
                      </Header>
                      
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>


        <Segment style={{ padding: '8em 0em' }} vertical>
          
          <Grid container columns="2" divided>
            <Grid.Row>
              <Grid.Column>
                <Header size='huge'>Top Dagger</Header>
                <p>This is gibberish so ignore me, blashea ehanbem hatnes na;sdfj weahdhlahfe a h as e akdhfahe a.</p>
              </Grid.Column>
              <Grid.Column>
                <Header size='huge'>Top Dagger</Header>
                <p>This is gibberish so ignore me, blashea ehanbem hatnes na;sdfj weahdhlahfe a h as e akdhfahe a.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div> 
    );
  }
}

export default App;
