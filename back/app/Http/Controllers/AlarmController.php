<?php

namespace App\Http\Controllers;

use App\Models\Alarm;
use App\Http\Requests\StoreAlarmRequest;
use App\Http\Requests\UpdateAlarmRequest;
use Illuminate\Http\Request;

class AlarmController extends Controller{
    public function index(Request $request){
        if ($request->user()->type == 'Administrador') {
            $alarms = Alarm::with('user')->get();
        } else {
            $alarms = Alarm::with('user')->where('user_id', $request->user()->id)->get();
        }
        return $alarms;
    }
    public function store(StoreAlarmRequest $request){return Alarm::create($request->all());}
    public function show($id){return Alarm::find($id);}
    public function update(UpdateAlarmRequest $request, Alarm $alarm){$alarm->update($request->all());return $alarm;}
    public function destroy(Alarm $alarm){$alarm->delete();return $alarm;}
}
