import React, { useState } from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie";

import Head from "next/head";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  useMediaQuery,
  Hidden,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";

import estimateAnimation from "../src/animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "3em",
    marginBottom: "2em",
    borderRadius: 5,
  },
  specialText: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Wich service are you interested in ?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: "/assets/software.svg",
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: "/assets/mobile.svg",
        iconAlt: "phone and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: "/assets/website.svg",
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: "/assets/website.svg",
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: "/assets/iphone.svg",
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: "/assets/android.svg",
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: "/assets/camera.svg",
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: "/assets/gps.svg",
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: "/assets/upload.svg",
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: "/assets/users.svg",
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: "/assets/biometrics.svg",
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: "/assets/bell.svg",
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: "/assets/info.svg",
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: "/assets/customized.svg",
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: "/assets/data.svg",
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: "/assets/person.svg",
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: "/assets/persons.svg",
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: "/assets/people.svg",
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: "/assets/info.svg",
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: "/assets/customized.svg",
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: "/assets/globe.svg",
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

export default function Estimate(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");

  //spinner state
  const [loading, setLoading] = useState(false);

  //snackbar state
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  //option de Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    //cree un clone du tableau d'objet du state
    const newQuestions = cloneDeep(questions);
    //verifie quelle question est active
    const currentlyActive = newQuestions.filter((question) => question.active);
    //recupere l'index de la question active...on met -1 car l'index = 0 quand id = 1
    const activeIndex = currentlyActive[0].id - 1;
    //recupere l'objet associé a la question
    const nextIndex = activeIndex + 1;
    //passe l'ancienne question a non active
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    //passe la question suivante a active
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    //met a jour le state avec la nouvelle question
    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    //verifie si c'est la derniere id du tableau
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    //verifie si c'est la derniere id du tableau
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    //fait un array avec les options selected
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    //switch permettant de select une option ou plusieurs suivant le cas
    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          //toggle
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        //toggle index... if true toggle to false et inversement
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }
    //switch permettant a la premiere question de choisir le bon set de questions suivant le choix
    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  //gestion des erreurs
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email ex: pierre.paul@jacques.fr");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid Phone Number ex: 0612345678");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const getTotal = () => {
    let cost = 0;
    //map toute les questions et filter option.selected de chaque option pour recuperer chaque option.selected = true dans un array
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      //filter le resultat avec une longueur superieure a 0 car le premier n'a pas de selection et donc egal a 0
      .filter((question) => question.length > 0);

    //map dans chaque niveau d'array pour recuperer le cost de chaques options selectionnées et incrementer pour avoir le total
    selections.map((options) => options.map((option) => (cost += option.cost)));

    // filter pour rechercher la derniere question qui est un multiplier suivant le nombre de users selectionne et qui n'apparait que dans une certaine serie de questions d'ou la longueur de question superieure a 2 dans le if
    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];

      setUsers(userCost.title);
      //soustrait le multplier au cost et multiplier le nouveau cost avec userCost
      cost -= userCost.cost;
      cost *= userCost.cost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) => question.options.filter((option) => option.selected)) //on push option.title du array option.selected dans le array vide newPlatforms
        [0].map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;
      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    setLoading(true);

    axios
      .get("https://us-central1-arcdev-dd519.cloudfunctions.net/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
          total: total,
          service: service,
          category: category,
          platforms: platforms,
          features: features,
          customFeatures: customFeatures,
          users: users,
        },
      })
      .then((res) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Estimate placed successfully",
          backgroundColor: "#4bb543",
        });
        setDialogOpen(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setAlert({
          open: true,
          message: "Oups, something went wrong, please try again ! ",
          backgroundColor: "#ff3232",
        });
      });
  };

  const estimateDisabled = () => {
    let disabled = true;

    //si option selectionnée elle est enlevée du array de vide ex
    const emptySelections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);
    // si le nombre d'options est = 2 (set de questions website)
    if (questions.length === 2) {
      //si emptySelection contient 1 array vide (set de questions website)
      if (emptySelections.length === 1) {
        //button actif
        disabled = false;
      }
      //si aucune option n'est selectionnée button disabled (default choix du set de question (app custom app ou website))
    } else if (questions.length === 1) {
      //button disabled
      disabled = true;
      // sinon le nombre de array vide est inferuieur a 3 et que la derniere option est selected avec au moins un item dans le array(set de questions app et custom app)
    } else if (
      emptySelections < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected
      ).length > 0
    ) {
      //button actif
      disabled = false;
    }

    //ce console log clarifie le fonctionnement de la fonction ^^
    console.log(emptySelections);

    return disabled;
  };

  const softwareSelection = (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src="/assets/check.svg" alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            you want {service}
            {platforms.length > 0
              ? ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
            .
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          style={{ marginBottom: "1.25em" }}
        >
          <Grid item xs={2}>
            <img src="/assets/check.svg" alt="checkmark" />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">
              {"with "}
              {/* if we have features... */}
              {features.length > 0
                ? //...and there's only 1...
                  features.length === 1
                  ? //then end the sentence here
                    `${features[0]}.`
                  : //otherwise, if there are two features...
                  features.length === 2
                  ? //...then end the sentence here
                    `${features[0]} and ${features[1]}.`
                  : //otherwise, if there are three or more features...
                    features
                      //filter out the very last feature...
                      .filter((feature, index) => index !== features.length - 1)
                      //and for those features return their name...
                      .map((feature, index) => (
                        <span key={index}>{`${feature}, `}</span>
                      ))
                : null}
              {features.length > 2
                ? //...and then finally add the last feature with 'and' in front of it
                  ` and ${features[features.length - 1]}.`
                : null}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs={2}>
            <img src="/assets/check.svg" alt="checkmark" />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">
              The custom features will be of {customFeatures.toLowerCase()}
              {`, and the project will be used by about ${users} users.`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src="/assets/check.svg" alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? "a Basic Website."
              : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container>
      <Head>
        <title key="title">
          Free Custom Software Estimate | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Use our free online estimate calculator to instantly check the cost of your custom software, mobile app, or website design and development project!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Free Estimate"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/estimate" />
        <link rel="canonical" key="canonical" href="arc.com/estimate" />
      </Head>
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h1" align={matchesMD ? "center" : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesMD ? 0 : "10em",
            mawWidth: "50em",
            marginTop: "7.5em",
          }}
        >
          <Lottie options={defaultOptions} width="100%" height="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginLeft: matchesMD ? 0 : "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h1"
                  align="center"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25em",
                    marginTop: "5em",
                    lineHeight: 1.25,
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    item
                    container
                    key={index}
                    direction="column"
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                      margin: matchesSM ? "0.5em 1em" : "0.5em",
                    }}
                    md
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
            >
              <img
                src={
                  navigationPreviousDisabled()
                    ? "/assets/backArrowDisabled.svg"
                    : "/assets/backArrow.svg"
                }
                alt="previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={navigationNextDisabled()}
            >
              <img
                src={
                  navigationNextDisabled()
                    ? "/assets/forwardArrowDisabled.svg"
                    : "/assets/forwardArrow.svg"
                }
                alt="next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            disabled={estimateDisabled()}
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSM}
      >
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Typography variant="h1" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            alignItems={matchesSM ? "center" : undefined}
            justifyContent="space-around"
          >
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                />
              </Grid>
              <Grid item style={{ maxWidth: "20em" }}>
                <TextField
                  placeholder=" Tell us more about your project"
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  multiline
                  rows={10}
                  className={classes.message}
                  InputProps={{ disableUnderline: true }}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                  style={{ lineHeight: 1.25 }}
                >
                  We can create this digital solution for an estimated
                  <span className={classes.specialText}>
                    {" "}
                    {/* avec toFixed a 2 pour afficher toujours 2 chiffres apres la virgule */}
                    {total.toFixed(2)}€
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Fill out your name, phone, and email, place your request, and
                  we'll get back to you with details moving forward and a final
                  price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems={matchesSM ? "center" : undefined}
              md={5}
              style={{ maxWidth: "30em" }}
            >
              <Hidden smDown>
                <Grid item>
                  {questions.length > 2 ? softwareSelection : websiteSelection}
                </Grid>
              </Hidden>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0 ||
                    email.length === 0 ||
                    phoneHelper.length !== 0 ||
                    phone.length === 0
                  }
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={sendEstimate}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      Place Request
                      <img
                        src="/assets/send.svg"
                        alt="paper airplane"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </>
                  )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid
                  item
                  style={{
                    marginBottom: matchesSM ? "5em" : 0,
                    marginTop: matchesSM ? "2em" : 0,
                  }}
                >
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  );
}
