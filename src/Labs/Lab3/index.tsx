import BooleanVariables from "./BooleanVariables";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";


export default function Lab3() {
    return (
      <div>
        <h2>Lab 3</h2>
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator />
        <ConditionalOutputIfElse />
        <ConditionalOutputInline />
        <LegacyFunctions />
      </div>
    );
  }
  