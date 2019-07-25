const style = {
    palette: {
        red: "#223179",
        grey: "#8c8c8c",
        white: "#ffffff",
        wine: "#590202",
        blakc: "#000000",
    },
    navigation: {
        boxShadow: "2px 2px 10px -2px rgba(0,0,0,.5)",
        backgroundColor: "#ffffff",
        selected: {
            color: "#223179",
        },
        notSelected : {
            color: "#8c8c8c",
        },
    },
    aboutMe: {
        header: {
            margin: "10px",
        },
        card: {
            boxShadow: "2px 2px 10px -2px rgba(0,0,0,.5)",
            borderRadius: "3px",
            backgroundColor: "white",
            margin: "10px",
            padding: "15px",
        },
        profileImage: {
            width: 250,
            height: 250,
            padding: 3,
            borderRadius: "50%",
            border: "3px solid #223179",
            margin: "5px",
        },
        buttonCV: {
            backgroundColor: "#223179",
            borderColor: "#223179",
            color: "#ffffff",
            width: 300,
            height: 100,
            borderRadius: "50%",
        },
        info: {
            paddingTop: 15,
        },
    },
    profile: {
        theSpan: {
            paddingLeft: 20,
            fontSize: 20,
        },
        tableHead: {
            paddingLeft: 20,
        },
        tableCont: {
            padding: 0,
        }
    },
    hobbies: {
        imagen: {
            maxWidth: 700,
            maxHeight: 350,
            width: "100%",
            height: "100%",
        },
        imagen2: {
            maxWidth: 300,
            maxHeight: 300,
            width: "100%",
            height: "100%",
        },
        text: {
            padding: "20px 20px 0px 20px",
        },
    },
    contact: {
        tableCell: {
            paddingLeft: "10%",
        },
    },
    projects: {
        cardStyle: {
            width: "18rem",
            margin: 20,
        },
        cardLink: {
            color: "#223179",
        },
    }
};

export default style;