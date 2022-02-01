import React from "react";
import Lottie from "react-lottie";

import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Typography, Grid, useMediaQuery } from "@material-ui/core";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  //option de Lottie animation1
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          The Revolution - Cutting-Edge Software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | The Revolution"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/revolution" />
        <link rel="canonical" key="canonical" href="arc.com/revolution" />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography align={matchesMD ? "center" : undefined} variant="h1">
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src="/assets/vision.svg"
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              The rise of computers, and subsequently theInternet, has
              completely altered everyaspect of human life. This has increased
              ourcomfort, broadened our connections,andreshaped how we viewthe
              world.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              What once was confined to huge roomsandteamsof engineers now
              resides in every singleoneofour hands. Harnessing this unlimited
              potential byusing it to solve problemsandbetter lives is atthe
              heartofeverythingwedo.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We want to help businesses capitalize on the latestandgreatest
              technology. The best way to predict thefuture is to bethe one
              buildingit, and we wanttohelp guidethe world into this next
              chapter of technologicalexpansion, exploration, and innovation.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              By holding ourselvestorigorous standards andpristine quality, we
              can ensureyouhavethe absolute besttools necessary to thrive in
              thisnew frontier.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We see a futurewhere every individual has personalized software
              custom tailored to their lifestyle, culture,andinterests, helping
              them.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              In 2013, Facebook invented a newway of building websites. Thisnew
              system, React.js, completelyrevolutionizesthe process and practice
              of website development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Insteadofchaining together longindividualpages, liketraditional
              websites, Reactwebsites are built withlittle chunksofcode called
              components. These componentsare faster, easier to maintain, and
              are easily reused and customized, eachserving a singular purpose.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Two years later theyshocked theworldby releasingasimilar system,
              React Native, for producing iOS and Android apps. Insteadofhaving
              to master two completely separatedevelopmentplatforms, you can
              leverage the knowledge you already possessed from building
              websites and reapplyit directly!Thiswas a hugeleap forward.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This technologyis now being usedby companieslike AirBnB,Microsoft,
              Netflix, Pinterest, Skype, Tesla, UberEats,and when Facebook
              purchased Instagram largeportions of itwere even rebuilt using
              React.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Developers have since built ontop of these systems by
              automatingproject setupanddeployment,allowing creatorstofocus as
              muchas possibleon their workitself.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              These technicaladvancementstranslateintosavings
              bysignificantlyreducing theworkload and streamliningthe workflow
              for developing new piecesof software, whilealso lowering the
              barriertoentry for mobile app development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This puts personalizationin your pocket —faster,better, andmore
              affordable than everbefore.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesMD ? "center" : "flex-end"}
          lg
        >
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#b3b3b3", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Our process begins the moment you realizeyouneed a piece of
              technology for your business. Whether you already have an idea for
              where to startandwhat to do, orifyoujustknowyouwant to step things
              up, our initial consultationwill help you examine your business
              holisticallytofindthe best solutions.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Detailednotes willbe taken on your requirementsand constraints,
              whiletakingcare to identify otherpotentialareas for consideration.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable,andour expertise andintuitionwill
              help usher you intothisnew futureof possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/consultationIcon.svg"
            alt="handshake"
            width="100%"
            style={{ maxWidth: 600 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#ff7373", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              After we settle on the best path forward and decide onasolution
              topursue,details like the cost andtimelinewill befinalized.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Then it’s time for us to starton your minimum viableproduct.
              That’s just a fancytermfora mockup, whichdoesn’t include colors,
              images, or anyother polished designelements,but captures the
              essential layout structureand functionality.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              This helps usunderstandand refinethe solution itself before
              getting distracted by specifics andlooks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/mockupIcon.svg"
            alt="basic website design outline"
            width="100%"
            style={{ maxWidth: 600 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Before moving any fartherwe comeback to you withour progress. This
              givesyouthe freedom to discuss anychanges you may wantorany ideas
              you may have comeup with before any heavylifting has beendone.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              We give you an interactive demonstration of the mockups,
              thoroughlyexplaining thethought processthat went into each screen
              and every anticipated feature.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Once you’re completelysatisfied with thevision for oursolutionwe
              get down to the nitty gritty, fine- details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#a67c52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Using the mockupsand notes takenduringthe consultationas
              guides,wewill start ironing out what the final productwill look
              like.Thisalso involves usingany brand material like fonts, colors,
              andlogostoextend the experience you’realready familiar with.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Noaspect is superfluous, and care will be takenwith every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/designIcon.svg"
            alt="paintbrush leaving stroke of paint"
            width="100%"
            style={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39b54a", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              A second roundofreview is essentialtoour goal of creating exactly
              what youwant,exactly how you want it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              This time we’ll be goingoverthe finalized designs inanother fully
              interactive demonstration. Again this gives you anopportunity to
              tweak things and make sure we get everythingrightthe first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#fbb03b", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Here’s where we getdown to business.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Engineering beginsafteryour approval on the final designs.We
              startby scaffolding outthe project on a highlevel, prioritizing
              someareas overothers.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Each area is then developed in order of importanceuntil readyto be
              connected to thenext piece.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Typicallythe backend, behindthe scenesoperationsare completed
              first. Once allthe services are in placewecanthen create the
              frontend, user sideofthings.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Finishingthe application doesn’t meanwe’redone though, because we
              use extensive testing toguarantee compatibility withall intended
              devices. .
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Only afterour rigorous examinations willweaccept a product
              asfinished, then pushing itthrough the production pipeline. This
              produces an optimized, compressed, consumer version ofthe code
              andassets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/buildIcon.svg"
            alt="construction site"
            width="100%"
            style={{ maxWidth: matchesMD ? 300 : 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#c1272d", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Themoment we’ve allbeen waitingfor.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              When construction comes to a close you’re thefirst one to know.
              We’llgive ourfinal demonstration toshowoffyour shiny new
              softwarein thewild soyouknow exactly how it will looktoyour users.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              When yousay the word, we press the button and launchyour project
              outto the public.We’re there to ensure everythinggoes toplan
              soyoucanstartreaping the rewards of your technological investment
              immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/launchIcon.svg"
            alt="rocket"
            width="100%"
            height="100%"
            style={{ maxWidth: 200, maxHeight: "40em" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8e45ce", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Our workdoesn’t end there.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              After a successfullaunch we keepinclosecontact to listen to
              feedback and hear howthe project is being received.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              From there onout we make sure your application iskept up to date
              andtaking advantage ofthe best features and practicesavailable.
              When new developmentsarise or new techniquesare discoveredin
              future projects, we willimplement thoseadvancementsinyour project
              aspart of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/maintainIcon.svg"
            alt="wrench tightening bolts"
            width="100%"
            style={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29abe2", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Thecycle repeats whenever you comeup with a newidea for
              extendingyourcurrentproject, or comeup with a brandnew
              systementirely.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              By planningforfuturefeatures andchanges we can buildand evolveyour
              application over time. As newusecases and customer needs develop
              we can respond with continuous integration of new content.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              Our iterative process will keep you current andcompetitive,
              allowing you to quicklyimplement changes insteadofwaiting months
              for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/iterateIcon.svg"
            alt="falling domino's"
            width="100%"
            style={{ maxWidth: 300 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
