import type { Plugin, Project } from '@yarnpkg/core'
import { MessageName, structUtils } from '@yarnpkg/core'
import type { InstallOptions } from '@yarnpkg/core/lib/Project'
import { ppath, xfs } from '@yarnpkg/fslib'

export const plugin: Plugin = {
	hooks: {
		async afterAllInstalled(project: Project, { report }: InstallOptions) {
			const artifactsPath = ppath.join(project.cwd, '.yarn', 'artifacts')

			if (!(await xfs.existsPromise(artifactsPath))) {
				await xfs.mkdirPromise(artifactsPath)
			}

			try {
				const rootWorkspace = project.tryWorkspaceByCwd(project.cwd)

				if (!rootWorkspace) {
					return
				}

				const workspaces = project.workspaces.filter(
					(ws) => ws.cwd !== project.cwd && ws.manifest.name.scope !== 'private',
				)

				await xfs.writeFilePromise(
					ppath.join(artifactsPath, 'workspaces.json'),
					JSON.stringify(workspaces.map(({ manifest }) => structUtils.stringifyIdent(manifest.name))),
				)
			} catch (e: any) {
				report.reportError(MessageName.UNNAMED, e.message)
			}
		},
	},
}
