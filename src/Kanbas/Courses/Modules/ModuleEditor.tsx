import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

export default function ModuleEditor({ dialogTitle, moduleName, setModuleName, addModule }:

    { dialogTitle: string; moduleName: string; setModuleName: (name: string) => void; addModule: () => void; }) {
    const { cid } = useParams()
    /*const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role !== 'FACULTY') {
        return <Navigate to={`/Kanbas/Courses/${cid}/Modules`} />
    }*/
        const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle} </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" defaultValue={moduleName} placeholder="Module Name"
                            onChange={(e) => setModuleName(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                    {currentUser.role === "FACULTY" && <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel </button>}
      
                            {currentUser.role === "FACULTY" && <button onClick={addModule} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                            Add Module </button>}
                    </div>
                </div>
            </div>
        </div>
    );
}
