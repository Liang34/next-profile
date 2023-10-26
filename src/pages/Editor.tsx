
/**
 * 简历编辑页
 * @returns 
 */
import { PDFViewer, View, Page, Document } from '@react-pdf/renderer'

export function Editor() {
  return (<div className="warp">
    <PDFViewer
      showToolbar={false}
      style={{ width: "100%", height: "100%" }}
    >
      <Document>
        <Page wrap={false} size="A4" >
          <View>
            年后呀
            {/* <Avatar data={state.avatar} />

            <Profile profile={state.profile} />
            <Skills data={state.skillList} />
            <Educations data={state.educationList} />
            <AwardList data={state.awardList} /> */}
          </View>
          <View>
            {/* <WorkExpList data={state.workExpList} theme={theme} />
            <ProjectList data={state.projectList} theme={theme} /> */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  </div>)
}