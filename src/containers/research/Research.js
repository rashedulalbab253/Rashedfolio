import React, { useContext } from "react";
import "./Research.scss";
import { researchSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useHistory } from "react-router-dom";

export default function Research() {
    const history = useHistory();
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    const { isDark } = useContext(StyleContext);
    if (!researchSection.display) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="research">
                <div className="research-main-div">
                    <div className="research-header">
                        <h1 className="research-heading">{researchSection.title}</h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode research-subtitle"
                                    : "subTitle research-subtitle"
                            }
                        >
                            {researchSection.subtitle}
                        </p>
                        <div className="interests-div">
                            {researchSection.interests.map((interest, i) => {
                                return (
                                    <span
                                        key={i}
                                        className={
                                            isDark
                                                ? "dark-mode interest-span"
                                                : "interest-span"
                                        }
                                    >
                                        {interest}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className="research-cards-div">
                        {researchSection.projects.map((project, i) => {
                            return (
                                <div
                                    key={i}
                                    className={
                                        isDark
                                            ? `dark-mode research-card research-card-dark ${project.isThesis ? "thesis-card" : ""}`
                                            : `research-card research-card-light ${project.isThesis ? "thesis-card" : ""}`
                                    }
                                    onClick={() => history.push(`/research-details/${i}`)}
                                >
                                    <div className="research-detail">
                                        {project.isThesis && (
                                            <div className="thesis-badge">THESIS</div>
                                        )}
                                        <h5
                                            className={isDark ? "dark-mode card-title" : "card-title"}
                                        >
                                            {project.projectName}
                                        </h5>
                                        {!project.isThesis && project.publishedAt && (
                                            <p
                                                className={
                                                    isDark ? "dark-mode card-published" : "card-published"
                                                }
                                            >
                                                {project.publishedAt}
                                            </p>
                                        )}
                                        <p
                                            className={
                                                isDark ? "dark-mode card-subtitle" : "card-subtitle"
                                            }
                                        >
                                            {project.projectDesc}
                                        </p>
                                        {project.footerLink ? (
                                            <div className="research-card-footer">
                                                {project.footerLink.map((link, i) => {
                                                    return (
                                                        <span
                                                            key={i}
                                                            className={
                                                                isDark
                                                                    ? "dark-mode research-tag"
                                                                    : "research-tag"
                                                            }
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                openUrlInNewTab(link.url);
                                                            }}
                                                        >
                                                            {link.name.toLowerCase().includes("github") && (
                                                                <i
                                                                    className="fab fa-github"
                                                                    style={{ marginRight: "8px" }}
                                                                ></i>
                                                            )}
                                                            {link.name.toLowerCase().includes("pdf") && (
                                                                <i
                                                                    className="fas fa-file-pdf"
                                                                    style={{ marginRight: "8px" }}
                                                                ></i>
                                                            )}
                                                            {link.name.toLowerCase().includes("view") && (
                                                                <i
                                                                    className="fas fa-external-link-alt"
                                                                    style={{ marginRight: "8px" }}
                                                                ></i>
                                                            )}
                                                            {link.name}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
