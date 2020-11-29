import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ControlledAccordions() {
  const classes = useStyles();
  const classe = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Aperitivos</Typography>
          <Typography className={classes.secondaryHeading}>Estes petiscos são tão saborosos que também podem ser servidos como prato principal!</Typography>
        </AccordionSummary>

        <AccordionDetails>          
          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/apertivos/Bloomin.png"
                title="Bloomin’ Onion"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Bloomin’ Onion
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Nossa famosa cebola gigante e dourada com o autêntico sabor do Outback. Acompanha nosso maravilhoso molho Bloom.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$50,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>            

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/apertivos/Mini-Burgers.png"
                title="Mini-Burguers"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Mini Burgers
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Seis suculentos mini burgers com queijo especial, ketchup, mostarda, picles e cebola roxa. Tudo preparado e temperado no melhor estilo.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$60,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/apertivos/Wings.jpg"
                title="Wings"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Mini Burgers
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              10 sobreasas de frango empanadas com um blend de temperos à sua escolha: light, medium ou hot. Servidas com molho tipo Blue Cheese e aipo crocante.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$30,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card> 
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Bebidas</Typography>
          <Typography className={classes.secondaryHeading}>
            Venda de bebidas alcoólicas proibida para menores de 18 anos. Se beber não dirija.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/bebidas/Budweiser.png"
                title="Budweiser"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Budweiser
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Cerveja Budweiser gelada, servida na caneca de chopp de 500ml.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$10,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/bebidas/caipirinha.jpg"
                title="Caipirinha"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Caipirinha
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Deliciona Caipirinha de diversas frutas. (Morango, Abacaxi, Limão)
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$15,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/bebidas/cafe.png"
                title="Cafe"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Café
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Delicioso Café expresso, feito com os melhores grãos de café.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$5,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card> 
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>BURGERS & SANDWICHES</Typography>
          <Typography className={classes.secondaryHeading}>
            Burgers e lanches com suculência, maciez e frescor. Tudo em um hambúrguer com o verdadeiro sabor da Land Down Under.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/burgers & sandwiches/australiano.png"
                title="Cheddar Burger Australiano"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Cheddar Burger Australiano
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              O real sabor Down Under. No nosso pão australiano, 200g de carne, queijo cheddar cremoso e cebolas grelhadas com toque balsâmico.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$20,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/burgers & sandwiches/picanha.jpg"
                title="Picanha Burger"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Picanha Burger
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              240 g de hambúrguer de picanha no pão tipo brioche, Bloomin’ Onion, smoked mayo, molho Flame, queijo tipo emmenthal e bacon.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$20,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/burgers & sandwiches/xburguer.png"
                title="xburger"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Xburger
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Burger com a nossa suculenta costela desfiada, caprichadas fatias de queijo tipo emmenthal e finalizado com molho Killer no pão tipo brioche.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$22,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card> 
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Sobremesas</Typography>
          <Typography className={classes.secondaryHeading}>
            Bateu aquele gostinho de quero mais? A explosão de sabores das nossas sobremesas é a cereja do seu bolo.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/sobremesas/ChocolateThunder.png"
                title="ChocolateThunder"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              ChocolateThunder
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Nosso brownie exclusivo e quentinho com sorvete de baunilha e deliciosa calda de chocolate.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$30,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/sobremesas/Milkshake.jpg"
                title="Milkshake"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Milkshake
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              O delicioso milkshake, no sabor chocolate ou morango, servido na caneca congelada de 340 ml.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$20,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>  

          <Card className={classe.root}>
            <CardActionArea>
              <CardMedia
                className={classe.media}
                image="/images/cardapio/sobremesas/TrioThunder.jpg"
                title="TrioThunder"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              TrioThunder
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Um trio de thunders, juntando todo o bold flavour: Chocolate Thunder, Havanna Thunder e Hazelnut Thunder.
              </Typography>
              <Typography variant="h1" component="h2" gutterBottom>
                R$39,00
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card> 

 
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
