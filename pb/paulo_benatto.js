/*
 * Paulo Leonardo Benatto
 * Curriculum Vida Loka
 */



var Curriculum = (function () {
    "use strict";

    var name = "Paulo Leonardo Benatto";

    var education = "UNIOESTE University";

    var address = "Sudeley Place, Brighton, UK";

    var email = "benatto@gmail.com";

    var linkedin = "https://uk.linkedin.com/in/benatto";

    var github = "github.com/patito";

    var phone = "+44 07424600850";

    var summary = "Hi mate,\n\n" +

            "first of all I'm not a hobbit, neither dwarf, but I don't mind if you call me Frodo. \n\n" +

            "My name is Paulo Leonardo Benatto (aka patito) and I'm from south Brazil. Currently I'm" +
            "living in the craziest city in the Uk, Brighton. What I'm doing here? Open pan popcorn," +
            "traveling, learning English, meeting people, drinking pints and making bugs in the old continent.\n\n" +

            "I started my life in England working as busser (waiter assistant) in London, good times, but now" +
            "I'm back to the dark side, making memory leaks.\n\n" +

            "Currently I'm working at Brandwatch on IT team. Both are amazing, the company and my team." +
            "I'm Jr. Sysadmin and the most of my time I'm automating tasks using Python, uWSGI, Nginx" +
            "(with SSL) on Debian servers. But sometimes I work with Nagios and other admin tasks.\n\n";

    var experience = [];

    var brandwatch = {
        started: new Date("July 28, 2014"),
        finished: new Date(), //present
        tasks: [
            "Deploy Bareos Backup System using Ansible.",
            "Developed python application to migrate company email to google.",
            "Develop python scripts to automate tasks",
            "Monitoring services and servers using Nagios.",
            "Developed web app to change LDAP password."
        ],
        technologies: ["Linux", "Ansible", "Python/Flask", "LDAP", "Nagios", "Git", "Bareos/Backup"]
    };

    var dba = {
        started: new Date("December 02, 2013"),
        finished: new Date("February 28, 2014"),
        tasks: [
            "Develop a system, in C language, to analyse vehicle traffic on Brazilian highways.",
            "C Code analysis using valgrind and splint. GLib library.",
            "Member of a team to develop a parking meter system. (Python, DBus and Raspberry PI)."
        ],
        technologies: ["Linux", "C", "Python", "Git", "Raspberry PI"]
    };

    var secplus = {
        started: new Date("December 17, 2012"),
        finished: new Date("November 29, 2013"),
        tasks: [
            "Backend development of web system for intelligent monitoring and management of natural disasters using Python.",
            "Frontend development using Google Maps API.",
            "Developed opensource projects such as malelf, libmalelf, libpenetra."
        ],
        technologies: ["Linux", "C language", "Python/Django", "Git", "Raspberry PI", "JavaScript"]
    };

    var digitro = {
        started: new Date("September 15, 2008"),
        finished: new Date("December 3, 2012"),
        tasks: [
            "Member of a team to develop IP Phone touch screen.",
            "Member of a team to develop a softphone.",
            "Linux administration.",
            "Network packet analysis with wireshark/tcpdump.",
            "Member of the team responsible to design and develop a product called" +
            "Guardião used to interecept calls and internet trafic of people whose are being investigated by the police."
        ],
        technologies: ["Linux", "C language", "SIP", "Subversion", "EFL"]
    };

    var voffice = {
        started: new Date("January 7, 2008"),
        finished: new Date("September 1, 2008"),
        tasks: [
            "My first job =)!",
            "Linux Administration.",
            "Asterisk Administration.",
            "Shell Script"
        ],
        technologies: ["Linux", "Asterisk", "Bug Factory"]
    };

    experience.push(voffice);
    experience.push(digitro);
    experience.push(secplus);
    experience.push(dba);
    experience.push(brandwatch);

    var opensource = {
        libmalelf: "The libmalelf is an evil library that SHOULD be used for good!" +
                "It was developed with the intent to assist in the process of infecting binaries and provide a safe way to analyze malwares.",
        malelf: "Malelficus program to dissect and infect ELF binaries.",
        libpenetra: "The libpenetra was created to study the windows binary format known as Portable Executable (PE)."
    };

    var interests = [
        "Linux OS",
        "Ansible",
        "JavaScript",
        "Python",
        "Go",
        "C",
        "Beers/Pints",
        "Barbecue",
        "Agile environment",
        "Making new friends"
    ];

    function MyCurriculum() {

        this.getExperience = function () {
            return experience;
        };

        this.getInterests = function () {
            return interests;
        };
    }

    return MyCurriculum;

}());

var cv = new Curriculum();
console.log(cv.getInterests());
console.log(cv.getExperience());
