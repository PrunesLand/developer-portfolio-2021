import React from 'react'

const Profile = () => {
    return (
        <div>

        </div>
    )
}

const Content = () => {
    return (
        <div></div>
    )
}

export default function Intro() {
    return (
        <>
            <section>
                <div>
                    <Profile>
                        <h3>Image position</h3>
                    </Profile>
                    <Content>
                        <h2>Job Title</h2>
                        <p>Description of yourself and brief introduction.</p>
                    </Content>
                </div>
            </section>
        </>
    )
}
